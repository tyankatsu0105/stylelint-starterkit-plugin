module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    "sourceType": "module",
  },
  globals: {
    "testConfig": true,
    "testRule": true,
    "@rules": true
  },
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};