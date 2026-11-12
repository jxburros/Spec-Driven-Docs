import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const abs = (relativePath) => path.join(root, relativePath);
const read = (relativePath) => readFileSync(abs(relativePath), 'utf8');
const exists = (relativePath) => existsSync(abs(relativePath));
const isDirectory = (relativePath) => exists(relativePath) && statSync(abs(relativePath)).isDirectory();

// All files under a directory, as paths relative to the repo root.
function filesUnder(relativeDirectory, files = []) {
  for (const entry of readdirSync(abs(relativeDirectory))) {
    if (entry === '.git' || entry === 'node_modules') continue;
    const relativePath = path.join(relativeDirectory, entry);
    if (statSync(abs(relativePath)).isDirectory()) filesUnder(relativePath, files);
    else files.push(relativePath);
  }
  return files;
}

const markdownFiles = () => filesUnder('.').filter((file) => file.endsWith('.md'));

// Markdown with fenced code blocks and HTML comments blanked out, line count preserved.
function prose(text) {
  const blank = (match) => match.replace(/[^\n]/g, '');
  return text.replace(/```[\s\S]*?```/g, blank).replace(/<!--[\s\S]*?-->/g, blank);
}

test('package exposes a terminal test command', () => {
  const scripts = JSON.parse(read('package.json')).scripts;
  assert.equal(scripts.test, 'node --test "tests/**/*.test.mjs"');
});

test('live documentation set is present', () => {
  for (const file of [
    'README.md',
    'AGENTS.md',
    'CLAUDE.md',
    'CHANGELOG.md',
    '.github/copilot-instructions.md',
    'guides/ai-guide.md',
    'guides/human-guide.md',
    'development-docs/coreIdentity.md',
    'development-docs/developmentManifesto.md',
    'development-docs/architecture.md',
    'development-docs/productRoadmap.md',
    'development-docs/decisions/TEMPLATE.md',
    'development-docs/architecture-plans/TEMPLATE.md',
    '.claude/settings.json',
    '.claude/hooks/session-start.sh',
  ]) {
    assert.ok(exists(file), `${file} is missing`);
  }

  for (const directory of ['development-docs/decisions/archives', 'development-docs/architecture-plans/archives']) {
    assert.ok(isDirectory(directory), `${directory} is missing`);
  }
});

test('operational records exist only as templates, not at the repository root (P-0001)', () => {
  for (const entry of [
    'features.md',
    'newFeatures.md',
    'current-checklist',
    'audits',
    'human-qa',
    'development-docs/research',
    'development-docs/design.json',
  ]) {
    assert.ok(!exists(entry), `${entry} must not exist at the root; it belongs under templates/`);
    assert.ok(exists(path.join('templates', entry)), `templates/${entry} is missing`);
  }
});

test('template set is complete and mirrors a target repository layout', () => {
  for (const file of [
    'AGENTS.md',
    'CLAUDE.md',
    'CHANGELOG.md',
    '.github/copilot-instructions.md',
    '.github/workflows/spec-docs-checks.yml',
    '.claude/settings.json',
    '.claude/hooks/session-start.sh',
    'development-docs/coreIdentity.md',
    'development-docs/developmentManifesto.md',
    'development-docs/architecture.md',
    'development-docs/productRoadmap.md',
    'development-docs/design.json',
    'development-docs/decisions/TEMPLATE.md',
    'development-docs/architecture-plans/TEMPLATE.md',
    'current-checklist/currentChecklist.md',
    'features.md',
    'newFeatures.md',
  ]) {
    assert.ok(exists(path.join('templates', file)), `templates/${file} is missing`);
  }

  for (const directory of [
    'audits/archives',
    'human-qa/archives',
    'development-docs/research',
    'development-docs/decisions/archives',
    'development-docs/architecture-plans/archives',
    'current-checklist/archives',
  ]) {
    assert.ok(isDirectory(path.join('templates', directory)), `templates/${directory} is missing`);
  }

  assert.equal(typeof JSON.parse(read('templates/development-docs/design.json'))._comment, 'string');

  for (const file of ['decisions/TEMPLATE.md', 'architecture-plans/TEMPLATE.md']) {
    assert.equal(
      read(`templates/development-docs/${file}`),
      read(`development-docs/${file}`),
      `development-docs/${file} differs from its template`,
    );
  }
});

test('relative markdown links resolve to files in the repository', () => {
  const brokenLinks = [];

  for (const file of markdownFiles()) {
    for (const [, rawTarget] of read(file).matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      const target = rawTarget.trim();
      if (/^(https?:|mailto:|#)/.test(target)) continue;

      const withoutAnchor = target.split('#')[0];
      if (!withoutAnchor) continue;

      const resolved = path.resolve(path.dirname(abs(file)), decodeURIComponent(withoutAnchor));
      if (!existsSync(resolved)) brokenLinks.push(`${file} -> ${target}`);
    }
  }

  assert.deepEqual(brokenLinks, []);
});

test('INV-1: live governance documents contain no template placeholders or status labels', () => {
  const problems = [];
  const liveDocs = [
    'AGENTS.md',
    'CLAUDE.md',
    '.github/copilot-instructions.md',
    ...filesUnder('development-docs').filter(
      (file) => file.endsWith('.md') && path.basename(file) !== 'TEMPLATE.md',
    ),
  ];

  for (const file of liveDocs) {
    const text = prose(read(file));
    if (/\[Project Name\]/.test(text)) problems.push(`${file}: contains [Project Name]`);
    if (/^\*\*Status: (Required|Recommended|Optional|Customize|Usually keep)/m.test(text)) {
      problems.push(`${file}: contains a template status label`);
    }
    if (/^## How to Use This Template/m.test(text)) problems.push(`${file}: contains template usage section`);
  }

  for (const file of ['coreIdentity.md', 'developmentManifesto.md', 'architecture.md', 'productRoadmap.md']) {
    assert.match(
      read(`templates/development-docs/${file}`),
      /\[Project Name\]/,
      `templates/development-docs/${file} no longer looks like a template (HC-1)`,
    );
  }

  assert.deepEqual(problems, []);
});

test('INV-2: installed skills and hook copies are identical to their sources', () => {
  const pairs = [
    ...filesUnder('skills')
      .filter((file) => file !== path.join('skills', 'README.md'))
      .map((file) => [file, path.join('.claude', file)]),
    ['.claude/settings.json', 'templates/.claude/settings.json'],
    ...filesUnder('.claude/hooks').map((file) => [file, path.join('templates', file)]),
  ];

  for (const [source, copy] of pairs) {
    assert.ok(exists(copy), `${copy} is missing; copy it from ${source}`);
    assert.equal(read(copy), read(source), `${copy} differs from ${source}`);
  }

  const installed = filesUnder('.claude/skills').map((file) => path.relative('.claude', file));
  for (const file of installed) {
    assert.ok(exists(file), `.claude/${file} has no source under skills/`);
  }
});

test('INV-3: each skill and its guide reference the same governance paths', () => {
  // Paths that define the system. A pair has drifted if one side names a path the other never mentions.
  const governancePath =
    /`((?:development-docs|current-checklist|audits|human-qa|\.github|templates)\/[^`\s]*|(?:AGENTS|CLAUDE|CHANGELOG|README|features|newFeatures)\.md)`/g;
  // Compare by final segment so `coreIdentity.md` matches `development-docs/coreIdentity.md`.
  const key = (reference) =>
    reference
      .replace(/\/+$/, '')
      .split('/')
      .pop()
      .replace(/^(D|P)-NNNN.*$/, '$1-NNNN');
  const references = (file) => new Set([...read(file).matchAll(governancePath)].map(([, match]) => key(match)));

  const problems = [];
  for (const [skill, guide] of [
    ['skills/spec-driven-development/SKILL.md', 'guides/ai-guide.md'],
    ['skills/spec-driven-docs-setup/SKILL.md', 'guides/human-guide.md'],
  ]) {
    const skillText = read(skill);
    const guideText = read(guide);
    for (const reference of references(skill)) {
      if (!guideText.includes(reference)) problems.push(`${guide} never mentions ${reference} (named in ${skill})`);
    }
    for (const reference of references(guide)) {
      if (!skillText.includes(reference)) problems.push(`${skill} never mentions ${reference} (named in ${guide})`);
    }
  }

  assert.deepEqual(problems, []);
});

test('INV-4: package declares no dependencies', () => {
  const manifest = JSON.parse(read('package.json'));
  for (const field of ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies']) {
    assert.deepEqual(Object.keys(manifest[field] ?? {}), [], `package.json declares ${field}`);
  }
});

test('INV-5: AGENTS.md and its template stay at or under 200 lines', () => {
  for (const file of ['AGENTS.md', 'templates/AGENTS.md']) {
    const lines = read(file).trimEnd().split('\n').length;
    assert.ok(lines <= 200, `${file} has ${lines} lines; the limit is 200`);
  }
});

test('INV-6: numbered level-2 sections are unique and ascending', () => {
  const problems = [];

  for (const file of markdownFiles()) {
    if (path.basename(file) === 'CHANGELOG.md') continue;

    let previous = 0;
    const seen = new Set();
    for (const [, digits] of prose(read(file)).matchAll(/^## (\d+)\. /gm)) {
      const number = Number(digits);
      if (seen.has(number)) problems.push(`${file}: section ${number} appears more than once`);
      else if (number < previous) problems.push(`${file}: section ${number} follows section ${previous}`);
      seen.add(number);
      previous = Math.max(previous, number);
    }
  }

  assert.deepEqual(problems, []);
});

test('INV-7: rule IDs are unique, and decision records and proposals are well formed', () => {
  const problems = [];

  // Defined rule IDs: bold list entries such as "- **HC-1 — ..." or "- **INV-1** ...".
  const defined = new Set();
  for (const [file, prefix] of [
    ['development-docs/coreIdentity.md', 'HC'],
    ['development-docs/architecture.md', 'INV'],
  ]) {
    const ids = [...read(file).matchAll(new RegExp(`^- \\*\\*(${prefix}-\\d+)\\b`, 'gm'))].map(([, id]) => id);
    assert.ok(ids.length > 0, `${file} defines no ${prefix}-n rules`);
    for (const id of ids) {
      if (defined.has(id)) problems.push(`${file}: ${id} is defined more than once`);
      defined.add(id);
    }
  }

  // Every rule ID cited anywhere in the live docs must be defined.
  for (const file of ['AGENTS.md', 'README.md', ...filesUnder('development-docs'), ...filesUnder('tests')]) {
    if (!/\.(md|mjs)$/.test(file) || path.basename(file) === 'TEMPLATE.md') continue;
    for (const [id] of read(file).matchAll(/\b(?:HC|INV)-\d+\b/g)) {
      if (!defined.has(id)) problems.push(`${file}: cites ${id}, which is not defined`);
    }
  }

  const field = (text, name) => text.match(new RegExp(`^- \\*\\*${name}:\\*\\* *(.*)$`, 'm'))?.[1].trim();

  const kinds = [
    {
      directory: 'development-docs/decisions',
      prefix: 'D',
      fields: ['Status', 'Date', 'Deviates from', 'Approved by', 'Review by'],
      sections: ['Context', 'Decision', 'Scope', 'Consequences'],
      status: /^(Active|Expired|Retired|Superseded by D-\d{4})$/,
      live: /^Active$/,
    },
    {
      directory: 'development-docs/architecture-plans',
      prefix: 'P',
      fields: ['Status', 'Date', 'Approved by', 'Touches'],
      sections: ['Why', 'What changes', 'Document changes on completion', 'Open choices', 'Done when'],
      status: /^(Proposed|Approved|Implemented|Rejected)$/,
      live: /^(Proposed|Approved)$/,
    },
  ];

  for (const kind of kinds) {
    const template = read(`${kind.directory}/TEMPLATE.md`);
    for (const name of kind.fields) {
      assert.ok(field(template, name) !== undefined, `${kind.directory}/TEMPLATE.md lacks the ${name} field`);
    }

    const numbers = new Set();
    for (const file of filesUnder(kind.directory)) {
      const name = path.basename(file);
      if (name === 'TEMPLATE.md' || name === '.gitkeep') continue;

      const match = name.match(new RegExp(`^${kind.prefix}-(\\d{4})-[a-z0-9-]+\\.md$`));
      if (!match) {
        problems.push(`${file}: name must look like ${kind.prefix}-0001-short-title.md`);
        continue;
      }
      if (numbers.has(match[1])) problems.push(`${file}: number ${match[1]} is already used`);
      numbers.add(match[1]);

      const text = read(file);
      if (!new RegExp(`^# ${kind.prefix}-${match[1]} — \\S`, 'm').test(text)) {
        problems.push(`${file}: first heading must be "# ${kind.prefix}-${match[1]} — Title"`);
      }
      for (const fieldName of kind.fields) {
        const value = field(text, fieldName);
        if (!value || /^\[.*\]$/.test(value) || /YYYY/.test(value)) {
          problems.push(`${file}: field "${fieldName}" is missing or unfilled`);
        }
      }
      for (const section of kind.sections) {
        if (!new RegExp(`^## ${section}$`, 'm').test(text)) problems.push(`${file}: missing section "${section}"`);
      }

      const status = field(text, 'Status') ?? '';
      if (!kind.status.test(status)) problems.push(`${file}: status "${status}" is not allowed`);

      const archived = file.split(path.sep).includes('archives');
      if (kind.live.test(status) && archived) problems.push(`${file}: status "${status}" must not be in archives/`);
      if (kind.status.test(status) && !kind.live.test(status) && !archived) {
        problems.push(`${file}: status "${status}" belongs in archives/`);
      }
    }
  }

  assert.deepEqual(problems, []);
});

test('session hook is registered and executable', () => {
  const settings = JSON.parse(read('.claude/settings.json'));
  const commands = settings.hooks.SessionStart.flatMap((entry) => entry.hooks.map((hook) => hook.command));
  assert.ok(
    commands.some((command) => command.includes('.claude/hooks/session-start.sh')),
    'SessionStart hook is not registered',
  );

  if (process.platform !== 'win32') {
    for (const file of ['.claude/hooks/session-start.sh', 'templates/.claude/hooks/session-start.sh']) {
      assert.ok(statSync(abs(file)).mode & 0o111, `${file} is not executable`);
    }
  }
});
