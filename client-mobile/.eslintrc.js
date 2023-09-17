/* eslint-disable no-undef */
/* eslint-disable sort-keys */
const path = require("path")

module.exports = {
  extends: [
    "universe/native",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  overrides: [
    {
      files: ["codegen.ts", "src/app/**/*.tsx", "src/lib/internationalization.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: [
      path.resolve(__dirname, "./tsconfig.json"),
      path.resolve(__dirname, "./tsconfig.node.json"),
    ],
    sourceType: "module",
  },
  plugins: ["typescript-sort-keys", "import", "@tanstack/query"],
  root: true,
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "comma-dangle": [0],
    "import/exports-last": 2,
    "import/first": 2,
    "import/no-cycle": 2,
    "import/no-default-export": 2,
    "import/no-dynamic-require": 2,
    "import/no-self-import": 2,
    "import/no-unresolved": 0,
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    "no-unused-vars": "off",
    quotes: ["error", "double"],
    semi: [0],
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        minKeys: 2,
        natural: true,
      },
    ],
    "@typescript-eslint/no-misused-promises": [0],
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
  },
}
