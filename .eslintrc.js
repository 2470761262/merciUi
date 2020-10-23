module.exports = {
  root: true,
  //  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/standard'
  ],
  // extends:'airbnb-base',
  // required to lint *.vue files
  plugins: ['html', 'vue'],
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 0,
    'linebreak-style': [0, 'error', 'windows'],
    'no-console': 'off',
    'no-multiple-empty-lines': [1],
    'comma-dangle': [2, 'never']

  }
}
