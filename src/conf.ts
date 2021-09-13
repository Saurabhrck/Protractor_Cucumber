import { browser, Config } from "protractor";
import reporter from "cucumber-html-reporter";
var HtmlReporter = require("protractor-beautiful-reporter");

export let config: Config = {
  directConnect: false,
  seleniumAddress: "http://localhost:4444/wd/hub",

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Framework to use. Jasmine is recommended.
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["../dist/resources/features/*.feature"],

  // cucumber command line options
  cucumberOpts: {
    require: ["../dist/stepDefs/*.js"], // require step definition files before executing features
    tags: "@whole", // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // strict: true, // <boolean> fail if there are any undefined or pending steps
    format: ["json:../reports/report.json"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    // "dry-run": true, // <boolean> invoke formatters without executing steps
    // compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  // // Options to be passed to Jasmine.
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000,
  // },

  onPrepare: function () {
    browser.driver.manage().window().maximize();
  },

  onComplete: function () {
    const options: reporter.Options = {
      theme: "bootstrap",
      jsonDir: "./reports/",
      output: "./reports/cucumber_report.html",
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: false,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        Browser: "Chrome",
        Platform: "Windows 10",
        Parallel: "none",
        Executed: "Local",
      },
    };

    reporter.generate(options);
  },

  SELENIUM_PROMISE_MANAGER: false,
};
