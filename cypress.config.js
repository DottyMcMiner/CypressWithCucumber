const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", // Cypress will now look for .feature files
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
