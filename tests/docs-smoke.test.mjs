import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const read = (relativePath) => readFileSync(path.join(root, relativePath), 'utf8');
const exists = (relativePath) => existsSync(path.join(root, relativePath));

function markdownFiles(directory = root, files = []) {
  for (const entry of readdirSync(directory)) {
    if (entry === '.git' || entry === 'node_modules') continue;

    const absolutePath = path.join(directory, entry);
    if (statSync(absolutePath).isDirectory()) {
      markdownFiles(absolutePath, files);
    } else if (entry.endsWith('.md')) {
      files.push(absolutePath);
    }
  }

  return files;
}

test('package exposes a terminal test command', () => {
  const scripts = JSON.parse(read('package.json')).scripts;

  assert.equal(scripts.test, 'node --test "tests/**/*.test.mjs"');
});

test('core documentation set is present', () => {
  for (const file of [
    'README.md',
    'AGENTS.md',
    'CLAUDE.md',
    'guides/ai-guide.md',
    'guides/human-guide.md',
    'development-docs/architecture.md',
  ]) {
    assert.ok(exists(file), `${file} is missing`);
  }
});

test('relative markdown links resolve to files in the repository', () => {
  const brokenLinks = [];

  for (const file of markdownFiles()) {
    const text = readFileSync(file, 'utf8');
    const links = text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g);

    for (const [, rawTarget] of links) {
      const target = rawTarget.trim();
      if (/^(https?:|mailto:|#)/.test(target)) continue;

      const withoutAnchor = target.split('#')[0];
      if (!withoutAnchor) continue;

      const resolved = path.resolve(path.dirname(file), decodeURIComponent(withoutAnchor));
      if (!existsSync(resolved)) {
        brokenLinks.push(`${path.relative(root, file)} -> ${target}`);
      }
    }
  }

  assert.deepEqual(brokenLinks, []);
});
