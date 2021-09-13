import { browser, element, by } from "protractor";

describe("First TS Test", () => {
  beforeEach(async () => {
    await browser.get("https://rahulshettyacademy.com/angularpractice/");
    await browser.driver.manage().window().maximize();
  });

  it("Test Something", async () => {
    await element(by.css("input[name='name']")).sendKeys("Saurabh");
    await element(by.css("input[name='email']")).sendKeys(
      "saurabhapd@gmail.com"
    );
    await element(by.id("exampleInputPassword1")).sendKeys("123456");
    await element(by.id("exampleCheck1")).click();
    await element(
      by.cssContainingText(
        "select[id='exampleFormControlSelect1'] option",
        "Female"
      )
    ).click();
    await element.all(by.name("inlineRadioOptions")).last().click();
    await element(by.buttonText("Submit")).click();
    expect(element(by.css("div[class*='alert-success']")).isDisplayed())
      .toBeTrue;
  });
});
