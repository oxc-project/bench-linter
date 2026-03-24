# VS Code Benchmark

Benchmarks for linting the Microsoft VS Code codebase with standard JavaScript/TypeScript rules.

## Setup

```bash
# From the root directory
../init.sh  # Clone VS Code repo and install dependencies
```

## Run Benchmark

```bash
./bench.sh
```

## Benchmarks Included

1. **Oxlint vs Biome** - Single rule comparison (no-debugger)
2. **Oxlint vs ESLint** - Full ruleset comparison with standard JS/TS rules

## Configuration Files

- `.oxlintrc.json` - Oxlint configuration with standard rules
- `eslint.config.mjs` - ESLint configuration with equivalent rules