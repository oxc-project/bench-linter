#!/usr/bin/env bash

cd "$(dirname "$0")/.."

SENTRY_TEST_DIR="$(pwd)/tmp/sentry/static"
SENTRY_TSCONFIG="$(pwd)/tmp/sentry/tsconfig.json"

echo "============================================"
echo "Sentry Benchmark - Type-Aware Linting"
echo "============================================"
echo ""

echo "Oxlint vs TypeScript ESLint with type-aware rules"
echo "-------------------------------------------"

OXC="./node_modules/.bin/oxlint -c bench-sentry/.oxlintrc.json --tsconfig ${SENTRY_TSCONFIG} --type-aware ${SENTRY_TEST_DIR}"
ESLINT="./node_modules/.bin/eslint -c bench-sentry/eslint.config.mjs ${SENTRY_TEST_DIR}"

hyperfine -w 1 -i \
  -n oxc "${OXC}" \
  -n eslint "${ESLINT}"
