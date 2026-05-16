module.exports = {
  default: {
    require: [
      "features/step-definitions/*.ts",
      "features/support/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: ["progress-bar", "html:test-results/cucumber-report.html"],
    paths: ["features/*.feature"],
    publishQuiet: true
  }
};