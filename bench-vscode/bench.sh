#!/usr/bin/env bash

VSCODE_TEST_DIR="../tmp/vscode/src"

echo "============================================"
echo "VS Code Benchmark"
echo "============================================"
echo ""

echo "1. Oxlint vs Biome with single rule (no-debugger)"
echo "-------------------------------------------"

OXC="../node_modules/.bin/oxlint -A all -D debugger ${VSCODE_TEST_DIR}"
BIOME="../node_modules/.bin/biome lint --only=suspicious/noDebugger ${VSCODE_TEST_DIR}"

hyperfine -w 1 -i \
  -n oxc "${OXC}" \
  -n biome "${BIOME}"

echo ""
echo "2. Oxlint vs ESLint with standard rules"
echo "-------------------------------------------"

OXC="../node_modules/.bin/oxlint -c .oxlintrc.json ${VSCODE_TEST_DIR}"
ESLINT="../node_modules/.bin/eslint -c eslint.config.mjs ${VSCODE_TEST_DIR}"

hyperfine -w 1 -i \
  -n oxc "${OXC}" \
  -n oxc-single-thread "${OXC} --threads=1" \
  -n eslint "${ESLINT}"