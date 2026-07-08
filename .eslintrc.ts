import type { Linter } from 'eslint';

const config: Linter.LegacyConfig = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    worker: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['html'],
  settings: {
    'html/indent': '+2',
    'html/report-bad-indent': 'off',
  },
  globals: {
    ResizeObserver: 'readonly',
    MutationObserver: 'readonly',
    IntersectionObserver: 'readonly',
    requestAnimationFrame: 'readonly',
    cancelAnimationFrame: 'readonly',
    customElements: 'readonly',
    structuredClone: 'readonly',
    matchMedia: 'readonly',
    performance: 'readonly',
  },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-undef': 'warn',
    'no-empty': 'warn',
    'no-useless-escape': 'warn',
    'no-constant-condition': 'warn',
    'no-inner-declarations': 'off',
    'no-redeclare': 'warn',
    'prefer-const': 'warn',
    'no-var': 'warn',
    eqeqeq: ['warn', 'smart'],
    'no-extra-semi': 'off',
    'no-unreachable': 'warn',
    'no-prototype-builtins': 'off',
  },
  ignorePatterns: ['node_modules/', 'package*.json', '.prettierrc.json'],
};

export default config;
