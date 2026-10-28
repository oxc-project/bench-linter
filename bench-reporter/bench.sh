#!/usr/bin/env bash

# Measures how fast oxlint *reports* diagnostics when there are a lot of them.
#
# Most output formats (unix, github, stylish, checkstyle, junit, sarif, gitlab, agent)
# compute line/column for every diagnostic. `-f json` is included as a control:
# it lints the same files and emits the same diagnostics, so the gap between
# `json` and the other formats is roughly the reporting cost.
#
# Compare two oxlint builds (e.g. oxc `main` vs a PR branch):
#   OXLINT=/path/to/oxlint-pr OXLINT_BASELINE=/path/to/oxlint-main ./bench-reporter/bench.sh

cd "$(dirname "$0")/.."

VSCODE_TEST_DIR="$(pwd)/tmp/vscode/src"
OXLINT="${OXLINT:-./node_modules/.bin/oxlint}"

# These env vars switch oxlint's default output format to `agent`; clear them so `-f` is the only input.
unset CLAUDECODE AI_AGENT CLAUDE_CODE

# ~470k diagnostics across ~11k files on the VS Code codebase.
ARGS="-A all -D restriction ${VSCODE_TEST_DIR}"

echo "============================================"
echo "Oxlint Reporter Benchmark (many diagnostics)"
echo "============================================"
echo ""
echo "oxlint: ${OXLINT} ($(${OXLINT} --version))"
echo "diagnostics: $(${OXLINT} ${ARGS} -f unix | tail -n 1)"
echo ""

COMMANDS=(
  -n unix "${OXLINT} ${ARGS} -f unix"
  -n agent "${OXLINT} ${ARGS} -f agent"
  -n json "${OXLINT} ${ARGS} -f json"
)

if [ -n "${OXLINT_BASELINE}" ]; then
  echo "baseline: ${OXLINT_BASELINE} ($(${OXLINT_BASELINE} --version))"
  echo ""
  COMMANDS+=(
    -n baseline-unix "${OXLINT_BASELINE} ${ARGS} -f unix"
    -n baseline-agent "${OXLINT_BASELINE} ${ARGS} -f agent"
  )
fi

hyperfine -w 1 -r 3 -i --output=null "${COMMANDS[@]}"
