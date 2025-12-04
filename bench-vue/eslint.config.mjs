import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/**
 * @satisfies {import('eslint').ESLint.ConfigData[]}
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
                    // Why is this such a big lint?
                    // When using `projectService`, it traverses up the tree looking for a
                    // `tsconfig.json`. However, not all files we want to lint are included
                    // in the `tsconfig.json` file. For example, `*.test.ts` files might be excluded etc.
                    // To get around this, and lint these files, we use `allowDefaultProject`, which allows us to specify
                    // additional files to lint. However, as this is slow, typescript-eslint disallows certain glob patterns
                    // (any pattern containing `**`). This means that this list has to be on the longer side to cover all files we want to lint.
                    //
                    // There are alternative solutions to this problem, such as:
                    // 1. Creating a catch-all `tsconfig.json` file that includes all files we want to lint.
                    //    - This is not ideal, as we are trying to compare to oxlint, so the less configuration we have (oxlint can be run directly via cmd line), the better.
                    // 2. Skipping linting these files
                    //    - This is not ideal, as this might mean that bugs slip through.
                    allowDefaultProject: [
                        'tmp/vue-core/*.cjs',
                        'tmp/vue-core/*.js',
                        'tmp/vue-core/*.mjs',
                        'tmp/vue-core/*.ts',
                        'tmp/vue-core/packages/runtime-core/src/apiAsyncComponent.ts',
                        'tmp/vue-core/packages/runtime-core/src/apiasynccomponent.ts',
                        'tmp/vue-core/packages-private/sfc-playground/src/download/template/main.js',
                        'tmp/vue-core/packages-private/sfc-playground/src/download/template/vite.config.js',
                        'tmp/vue-core/packages-private/sfc-playground/src/vue-dev-proxy-prod.ts',
                        'tmp/vue-core/packages-private/sfc-playground/src/vue-dev-proxy.ts',
                        'tmp/vue-core/packages/compiler-core/index.js',
                        'tmp/vue-core/packages/compiler-dom/index.js',
                        'tmp/vue-core/packages/compiler-dom/src/decodeHtmlBrowser.ts',
                        'tmp/vue-core/packages/compiler-dom/src/decodeHtmlBrowser.ts',
                        'tmp/vue-core/packages/reactivity/__benchmarks__/*.bench.ts',
                        'tmp/vue-core/packages/reactivity/index.js',
                        'tmp/vue-core/packages/runtime-core/index.js',
                        'tmp/vue-core/packages/runtime-core/src/apiAsyncComponent.ts',
                        'tmp/vue-core/packages/runtime-core/src/apiAsyncComponent.ts',
                        'tmp/vue-core/packages/runtime-core/src/apiAsyncComponent.ts',
                        'tmp/vue-core/packages/runtime-core/types/globalComponents.d.ts',
                        'tmp/vue-core/packages/runtime-core/types/scriptSetupHelpers.d.ts',
                        'tmp/vue-core/packages/runtime-dom/index.js',
                        'tmp/vue-core/packages/runtime-test/index.js',
                        'tmp/vue-core/packages/server-renderer/index.js',
                        'tmp/vue-core/packages/shared/index.js',
                        'tmp/vue-core/packages/vue-compat/index.js',
                        'tmp/vue-core/packages/vue/compiler-sfc/index.browser.js',
                        'tmp/vue-core/packages/vue/compiler-sfc/index.browser.mjs',
                        'tmp/vue-core/packages/vue/compiler-sfc/index.d.mts',
                        'tmp/vue-core/packages/vue/compiler-sfc/index.d.ts',
                        'tmp/vue-core/packages/vue/compiler-sfc/index.js',
                        'tmp/vue-core/packages/vue/compiler-sfc/index.mjs',
                        'tmp/vue-core/packages/vue/compiler-sfc/register-ts.js',
                        'tmp/vue-core/packages/vue/index.js',
                        'tmp/vue-core/packages/vue/index.mjs',
                        'tmp/vue-core/packages/vue/jsx-runtime/index.js',
                        'tmp/vue-core/packages/vue/jsx-runtime/index.mjs',
                        'tmp/vue-core/packages/vue/jsx.d.ts',
                        'tmp/vue-core/packages/vue/server-renderer/index.d.mts',
                        'tmp/vue-core/packages/vue/server-renderer/index.d.ts',
                        'tmp/vue-core/packages/vue/server-renderer/index.js',
                        'tmp/vue-core/packages/vue/server-renderer/index.mjs',
                        'tmp/vue-core/scripts/*.js',
                    ],
                    maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 1_000_000,
                },
            },
        },
        rules: {
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-array-delete': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-deprecated': 'error',
            '@typescript-eslint/no-duplicate-type-constituents': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-implied-eval': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-redundant-type-constituents': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-enum-comparison': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/no-unsafe-unary-minus': 'error',
            '@typescript-eslint/only-throw-error': 'error',
            '@typescript-eslint/prefer-promise-reject-errors': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/unbound-method': 'error',
        },
    },
];
