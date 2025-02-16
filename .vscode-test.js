const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    label: 'unitTests',
    files: 'dist/test/**/*.test.js',
    version: '1.94.2',
    mocha: {
      ui: 'tdd',
      timeout: 20000
    }
  }
]);