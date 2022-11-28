module.exports = {
  moduleFileExtensions: ['js'],
  clearMocks: true,
  coverageProvider: "v8",
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.test.js",
    "!src/**/*.spec.js",
  ],
  testEnvironment: "node",
  testResultsProcessor: "jest-sonar-reporter",
};
