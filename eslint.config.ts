/* eslint-env node */
const cjsExport = require("@typescript-eslint/eslint-plugin");
const tsEslintParser = require("@typescript-eslint/parser");
import js = require("@eslint/js");
const prettier = require("eslint-config-prettier");

module.exports = [
  js.configs.recommended,
  {
    rules: {
      quotes: "off",
    },
  },
  {
    files: ["*.ts"],

    plugins: { "@typescript-eslint": cjsExport },
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      quotes: "off",
      "@typescript-eslint/quotes": "off",
      semi: [2, "always"],
      "@typescript-eslint/semi": [2, "always"],
    },
  },
  {
    ignores: ["**/.*", "*.config.*", "dist"],
  },
  prettier,
];
