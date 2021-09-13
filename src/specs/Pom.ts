import { browser, element, by, protractor } from "protractor";
import { HomePage } from "../locators/Home";
import { Guide } from "../locators/Guide";

describe("Page object Test", () => {
  const homePage = new HomePage();
  const guidePage = new Guide();
  beforeEach(async () => {
    await browser.get("https://angular.io/");
    await browser.driver.manage().window().maximize();
  });
  it("Sample Test", async () => {
    await homePage.getStarted.click();
    await guidePage.searchBox.sendKeys("Hello");
    await guidePage.searchBox.sendKeys(protractor.Key.ESCAPE);
    await guidePage.introCard.click();
    expect(guidePage.title.isDisplayed()).toBeTrue;
  });
});
