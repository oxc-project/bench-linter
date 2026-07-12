# Vue Core Benchmark

Benchmarks for linting the Vue.js Core codebase with type-aware TypeScript rules.

## Setup

```bash
# From the root directory
../init.sh  # Clone Vue Core repo and install dependencies
```

## Run Benchmark

```bash
./bench.sh
```

## Benchmarks Included

**Oxlint vs TypeScript ESLint** - Type-aware rules comparison, with ESLint run both single-threaded (default) and multi-threaded (`--concurrency=auto`)

## Configuration Files

- `.oxlintrc.json` - Oxlint configuration with type-aware rules
- `eslint.config.mjs` - TypeScript ESLint configuration with equivalent type-aware rules

## Type-Aware Rules

This benchmark focuses on computationally expensive type-aware rules that require TypeScript type information, including:
- `@typescript-eslint/await-thenable`
- `@typescript-eslint/no-floating-promises`
- `@typescript-eslint/no-misused-promises`
- `@typescript-eslint/unbound-method`
- And more...