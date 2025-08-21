// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore build artifacts and deps
  { ignores: ['dist', 'node_modules', '.vite'] },

  // Main rules for JS/TS + React files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Base recommended
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ✅ New JSX transform: you do NOT need `import React` for JSX
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // TypeScript handles undefined vars; avoid duplicate noise
      'no-undef': 'off',

      // TS ergonomics
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',

      // You’re using React Fast Refresh via Vite
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Allow vendor/custom attributes used by cmdk, etc.
      'react/no-unknown-property': ['warn', { ignore: ['cmdk-*'] }],

      // Optional: the quotes/apostrophes-in-JSX copy rules can be noisy
      'react/no-unescaped-entities': 'warn',
      'react/prop-types': 'off', // using TypeScript instead of prop-types
    },
  },

  // Node-ish config files: allow require() and CommonJS patterns
  {
    files: [
      '*.{cjs,js,ts}',
      'vite.config.*',
      'tailwind.config.*',
      'postcss.config.*',
      'eslint.config.*',
    ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
