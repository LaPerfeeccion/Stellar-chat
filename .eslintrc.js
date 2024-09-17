module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: ['.eslintrc.js', 'projects/**/*', 'node_modules/**/*', 'coverage/**/*', 'dist/**/*'],
  plugins: ['@typescript-eslint/eslint-plugin', 'prefer-arrow', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended-typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },

  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false
      }
    ],
    'jsdoc/require-jsdoc': [
        'error',
        {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: false,
                FunctionExpression: true,
            },
            checkConstructors: false,
        },
    ],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: ['static-field', 'instance-field', 'static-method', 'instance-method']
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
        tabWidth: 2,
        semi: true,
        printWidth: 120,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['property'],
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};