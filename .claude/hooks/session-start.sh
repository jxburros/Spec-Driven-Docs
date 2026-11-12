#!/bin/sh
# SessionStart hook for Spec-Driven Docs.
# Read-only: prints governance context so every Claude Code session starts with it.
# Never fails the session: any missing file is skipped.

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0

echo "## Spec-Driven Docs — session context"
echo
echo "This repository is governed by Spec-Driven Docs. Before changing anything:"
echo "1. Invoke the spec-driven-development skill (/spec-driven-development)."
echo "2. Follow AGENTS.md: instruction hierarchy, read-before table, stop-and-ask gates."
echo "3. A deviation from an HC-n / INV-n rule needs an approved decision record first."

# Print "<id and title> [<status>]" for record files whose Status matches a pattern.
list_records() {
  dir=$1; prefix=$2; pattern=$3; found=0
  for f in "$dir"/"$prefix"-*.md; do
    [ -f "$f" ] || continue
    status=$(sed -n 's/^- \*\*Status:\*\* *//p' "$f" | head -n 1)
    case "$status" in
      $pattern)
        title=$(sed -n 's/^# *//p' "$f" | head -n 1)
        echo "- $title [$status] ($f)"
        found=1
        ;;
    esac
  done
  [ "$found" -eq 1 ] || echo "- None."
}

echo
echo "### Active decision records (approved deviations)"
list_records development-docs/decisions D 'Active*'

echo
echo "### Open proposals"
list_records development-docs/architecture-plans P 'Proposed*|Approved*'

if [ -f CHANGELOG.md ]; then
  echo
  echo "### Latest changelog handover"
  awk '
    /^## / { n++; if (n == 1) print; next }
    n == 1 && /^### / { show = ($0 ~ /^### (Not completed|Handover)/) }
    n == 1 && show { print }
    n > 1 { exit }
  ' CHANGELOG.md
fi

exit 0
