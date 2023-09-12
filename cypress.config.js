const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://www.saucedemo.com',
    env: {
      staging_url: 'www.facebook.com',
      production_url: 'www.instagram.com',
      orange_url: 'https://opensource-demo.orangehrmlive.com/',
      username: 'abcdef'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5000
  },
});