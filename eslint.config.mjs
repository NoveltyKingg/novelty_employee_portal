import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  ...nextVitals,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/preserve-manual-memoization': 'warn',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-duplicate-imports': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'import/no-anonymous-default-export': 'off',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/order': 'off',
      'lines-around-comment': [
        'error',
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],
      'newline-before-return': 'error',
    },
  },

  prettierConfig,

  globalIgnores(['.next/**', '.turbo/**', 'node_modules/**', 'out/**', 'build/**', 'dist/**', 'coverage/**', '*.min.js', 'next-env.d.ts']),
]);
