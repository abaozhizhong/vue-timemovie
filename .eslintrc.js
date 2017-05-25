// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //字符串的引号，单引号，双引号，反引号
     "quotes": [2, "single", { "allowTemplateLiterals": true }],
      "no-unused-vars": "off",
      "indent": 'off',
      'eol-last': 'off',
      "space-infix-ops": ["error", {"int32Hint": false}],
      "no-useless-escape": 0,
      "no-invalid-regexp": 0,
      "eqeqeq": 0,
      "no-undef": 0,
      "no-eval": 0,
      "camelcase": 0
  },
  // 'globals': {
  //   'Swiper': true
  // }
}
