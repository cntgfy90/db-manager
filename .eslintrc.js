module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    env: {
        node: true,
        commonjs: true,
    },
   parserOptions:  {
      ecmaVersion:  2018,
      sourceType:  'module',
    },
    rules:  {
        'no-console': 'error', 
        'no-eval': 'error',
        'no-implicit-globals': 'error',
        'no-iterator': 'error',
        'no-implied-eval': 'error',
        'no-magic-numbers': ['error', { enforceConst: true }],
        'no-new-wrappers': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-throw-literal': 'error',
    },
  };