module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['vue', 'typescript'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/standard',
    'typescript'
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 0,
    'linebreak-style': [0, 'error', 'windows'],
    'no-console': 'off',
    'no-multiple-empty-lines': [1],
    'comma-dangle': [2, 'never']
  }
}
