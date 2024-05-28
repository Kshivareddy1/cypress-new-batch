const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    // charts: true,
    // reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    // inlineAssets: true,
    // saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    includeShadowDom:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
     
    },
  },
});
