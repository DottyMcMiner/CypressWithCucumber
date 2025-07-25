const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false, //turn off security settings to allow for multiple page tests
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    specPattern: "**/*.feature", // Cypress will now look for .feature files
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on); 
    }
  },
});
