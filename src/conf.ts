import { browser, Config, element } from "protractor";
import reporter from "cucumber-html-reporter";

export let config: Config = {
  directConnect: false,
  seleniumAddress: "http://localhost:4444/wd/hub",

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 2,
  },

  // Framework to use. Jasmine is recommended.
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["../dist/resources/features/*.feature"],

  // cucumber command line options
  cucumberOpts: {
    require: ["../dist/stepDefs/*.js"],
    tags: "@whole",
    format: "json:../reports/report.json",
    retry: 1,
  },

  onPrepare: function () {
    browser.driver.manage().window().maximize();
  },

  onComplete: function () {
    try {
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
          Parallel: "Features",
          Executed: "Grid",
        },
      };

      reporter.generate(options);
    } catch (error) {
      if (
        !(error as SyntaxError).message.endsWith("Unexpected end of JSON input")
      ) {
        throw error;
      }
    }
  },

  SELENIUM_PROMISE_MANAGER: false,
};
