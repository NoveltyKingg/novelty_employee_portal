import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,

  {
    files: ["**/*.{js,jsx}"],

    plugins: {
      import: importPlugin,
    },

    rules: {
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/set-state-in-effect": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "lines-around-comment": [
        "error",
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],

      "newline-before-return": "error",

      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],
    },
  },

  prettierConfig,

  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "dist/**",
    "coverage/**",
  ]),
]);
