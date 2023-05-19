const { defineConfig } = require("cypress");

module.exports = defineConfig({
  integrationFolder: "cypress/integration/examples",
  reporter: "junit",
  reporterOptions: {
    mochaFile: "tests/test-output-[hash].xml",
    toConsole: true,
    attachments: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
