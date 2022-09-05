const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't143h8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
