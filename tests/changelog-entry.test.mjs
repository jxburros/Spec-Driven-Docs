import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// The ref to compare against: BASE_REF as given, or the pull request base in GitHub Actions.
const baseRef =
  process.env.BASE_REF || (process.env.GITHUB_BASE_REF ? `origin/${process.env.GITHUB_BASE_REF}` : '');

const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' });

test(
  'INV-8: changes relative to the base ref include a new dated CHANGELOG.md entry',
  { skip: baseRef ? false : 'set BASE_REF (for example origin/main) to run this check' },
  () => {
    const changedFiles = git('diff', '--name-only', `${baseRef}...HEAD`).split('\n').filter(Boolean);
    if (changedFiles.length === 0) return;

    const addedEntries = git('diff', `${baseRef}...HEAD`, '--', 'CHANGELOG.md')
      .split('\n')
      .filter((line) => /^\+## \d{4}-\d{2}-\d{2} — Agent: \S/.test(line));

    assert.ok(
      addedEntries.length > 0,
      `${changedFiles.length} file(s) changed relative to ${baseRef}, but CHANGELOG.md gained no ` +
        '"## YYYY-MM-DD — Agent: <Tool Name> (<Model Name>)" entry.',
    );
  },
);
