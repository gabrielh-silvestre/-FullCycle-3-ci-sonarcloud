const jestRootConfig = require("./jest.config.js");

module.exports = {
  ...jestRootConfig,
  testResultsProcessor: "jest-sonar-reporter",
};
