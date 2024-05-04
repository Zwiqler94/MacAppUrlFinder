/* eslint-env node */
import cjsExport from "@typescript-eslint/eslint-plugin";
// import tsEslintParser from "@typescript-eslint/parser";
import * as js from "@eslint/js";
import prettier from "eslint-config-prettier";

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
      // parser: tsEslintParser,
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
