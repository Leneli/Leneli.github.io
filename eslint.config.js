import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import boundaries from 'eslint-plugin-boundaries'
import importX from 'eslint-plugin-import-x'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },

    plugins: {
      boundaries,
      'import-x': importX,
    },

    settings: {
      'boundaries/root-path': import.meta.dirname,
      'boundaries/include': ['src/**/*.{js,jsx,ts,tsx}'],
      'boundaries/legacy-templates': false,
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'src/app',
          partialMatch: false,
        },
        {
          type: 'api',
          pattern: 'src/api',
          partialMatch: false,
        },
        {
          type: 'page',
          pattern: 'src/pages/*',
          partialMatch: false,
          capture: ['slice'],
        },
        {
          type: 'widget',
          pattern: 'src/widgets/*',
          partialMatch: false,
          capture: ['slice'],
        },
        {
          type: 'feature',
          pattern: 'src/features/*',
          partialMatch: false,
          capture: ['slice'],
        },
        {
          type: 'entity',
          pattern: 'src/entities/*',
          partialMatch: false,
          capture: ['slice'],
        },
        {
          type: 'shared',
          pattern: 'src/shared/*',
          partialMatch: false,
          capture: ['slice'],
        },
        {
          type: 'root',
          pattern: 'src',
          partialMatch: false,
        },
      ],

      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },

      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: './tsconfig.app.json',
        }),
      ],

      'import-x/internal-regex': '^@/',
    },

    rules: {
      'no-empty': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'no-prototype-builtins': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'never'],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-var-requires': 'off',

      'import-x/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],

          pathGroups: [
            {
              pattern:
                '{react,react/**,react-dom,react-dom/**,react-router,react-router/**,react-router-dom,react-router-dom/**,react-*,react-*/**,@tanstack/react-*,@reduxjs/toolkit}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/app{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/api{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/pages{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/widgets{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/features{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/entities{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/shared{,/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/assets{,/**}',
              group: 'internal',
              position: 'before',
            },
          ],

          pathGroupsExcludedImportTypes: [],
          distinctGroup: true,
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',

      'boundaries/dependencies': [
        'error',
        {
          default: 'allow',
          policies: [
            {
              disallow: {
                to: {
                  element: {
                    type: [
                      'app',
                      'api',
                      'page',
                      'widget',
                      'feature',
                      'entity',
                      'shared',
                    ],
                    fileInternalPath: '!index.ts',
                  },
                },
              },
              message:
                'Import from another module is allowed only through its public API (index.ts)',
            },
            {
              disallow: {
                to: {
                  element: {
                    type: [
                      'app',
                      'api',
                      'page',
                      'widget',
                      'feature',
                      'entity',
                      'shared',
                    ],
                  },
                },
                dependency: {
                  source: '!@/**',
                },
              },
              message:
                'Use the @ alias and the module public API to import another module',
            },
          ],
        },
      ],
    },
  },
])
