module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "css",
  jsxBracketSameLine: true,
  printWidth: 600,
  proseWrap: "preserve",
  plugins: [],
  quoteProps: "as-needed",
  jsxSingleQuote: true,
  requirePragma: false,
  useTabs: true,
  vueIndentScriptAndStyle: true,
  overrides: [{
      files: ".json",
      options: {
        printWidth: 1300,
        proseWrap: "never",
      },
    },
    {
      files: ".vue",
      options: {
        printWidth: 1600,
        proseWrap: "never",
      },
    },
    {
      files: ".js*",
      options: {
        "prettier.printWidth": 600,
      },
    },
  ],
};
