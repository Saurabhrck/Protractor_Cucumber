import { After, Before, Status } from "@cucumber/cucumber";
import { browser } from "protractor";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000);

Before({ tags: "@Guide" }, function () {
  browser.driver
    .manage()
    .deleteAllCookies()
    .then(() => {
      console.log("Cookies Deleted");
    });
});

After("@whole", (result) => {
  console.log("Test Done");
  console.log(result.result?.status);
});

After(async function (scenario) {
  if (scenario.result?.status !== Status.PASSED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});
