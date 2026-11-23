import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import vitest from '@vitest/eslint-plugin';
import testingLibrary from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'import-x': importPlugin,
        },
        settings: {
            'import-x/resolver-next': [
                createTypeScriptImportResolver({
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                }),
            ],
        },
        rules: {
            // Prevent cross-feature imports - features should be isolated
            'import-x/no-restricted-paths': [
                'error',
                {
                    zones: [
                        // Add a zone for each feature to prevent importing from other features
                        {
                            target: './src/features/example',
                            from: './src/features',
                            except: ['./example'],
                        },
                        // Add more zones here as you create more features:
                        // {
                        //   target: './src/features/auth',
                        //   from: './src/features',
                        //   except: ['./auth'],
                        // },

                        // enforce unidirectional codebase:
                        // e.g. src/app can import from src/features but not the other way around
                        {
                            target: './src/features',
                            from: './src/app',
                        },

                        // e.g. src/features and src/app can import from these shared modules but not the other way around
                        {
                            target: [
                                './src/components',
                                './src/hooks',
                                './src/lib',
                                './src/types',
                                './src/utils',
                            ],
                            from: ['./src/features', './src/app'],
                        },
                    ],
                },
            ],
        },
    },
    // Disable react-refresh rule for shadcn/ui components (auto-generated)
    {
        files: ['src/components/ui/**/*.{ts,tsx}'],
        rules: {
            'react-refresh/only-export-components': 'off',
        },
    },
    // Test files configuration
    {
        files: ['**/*.test.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}', 'src/setupTests.ts', 'src/test-utils/**/*.{ts,tsx}'],
        plugins: {
            vitest,
            'testing-library': testingLibrary,
        },
        languageOptions: {
            globals: {
                ...vitest.environments.env.globals,
            },
        },
        rules: {
            ...vitest.configs.recommended.rules,
            ...testingLibrary.configs['flat/react'].rules,
            // Turn off expect-expect rule to avoid distracting squiggles while writing tests
            'vitest/expect-expect': 'off',
            'react-refresh/only-export-components': 'off',
        },
    },
]);
