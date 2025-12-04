import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/**
 * ESLint config for Sentry benchmark - Type-Aware Rules
 * Based on https://github.com/getsentry/sentry/blob/main/eslint.config.mjs
 */
export default [
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.js', '**/*.mjs', '**/*.cjs'],
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                projectService: {
                    // allowDefaultProject: []
                },
            },
        },
        rules: {
            // Type-aware rules from Sentry's eslint.config.mjs
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/no-array-delete': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/no-meaningless-void-operator': 'error',
        },
    },
];
