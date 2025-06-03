import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'eslint':recommended,
      'plugin':React/recommended, // If using React
      'plugin':React-hooks/recommended, // If using React
      prettier, // Turns off ESLint rules that conflict with Prettier
      'plugin':prettier/recommended, // Runs Prettier as an ESLint rule
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier':['error',{
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "all"
      }]
    },
  },
]
