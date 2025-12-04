#!/usr/bin/env bash

cd "$(dirname "$0")/.."

VUE_CORE_TEST_DIR="$(pwd)/tmp/vue-core"

echo "============================================"
echo "Vue Core Benchmark - Type-Aware Rules"
echo "============================================"
echo ""

echo "Oxlint vs TypeScript ESLint with type-aware rules"
echo "-------------------------------------------"

OXC="./node_modules/.bin/oxlint -c bench-vue/.oxlintrc.json --type-aware ${VUE_CORE_TEST_DIR}"
ESLINT="./node_modules/.bin/eslint -c bench-vue/eslint.config.mjs ${VUE_CORE_TEST_DIR}"

hyperfine -w 1 -i \
  -n oxc "${OXC}" \
  -n eslint "${ESLINT}"
