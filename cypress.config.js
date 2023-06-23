const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.wingo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
