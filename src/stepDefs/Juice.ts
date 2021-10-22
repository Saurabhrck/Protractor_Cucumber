import { Given, Then, When } from "@cucumber/cucumber";
import { browser, By, element, protractor } from "protractor";
import chai from "chai";

const expect = chai.expect;
const EC = protractor.ExpectedConditions;
Given("I open juice shop", async function () {
  await browser.get("http://localhost:3000/");
  await element(By.css("button[aria-label='Close Welcome Banner']")).click();
});

When(
  "I login to the application with username {string} and password {string}",
  async function (username, password) {
    await element(By.id("navbarAccount")).click();
    await element(By.id("navbarLoginButton")).click();
    await element(By.id("email")).sendKeys(username);
    await element(By.id("password")).sendKeys(password);
    await element(By.id("loginButton")).click();
    await element(By.css("button[aria-label='Show the shopping cart']"))
      .isDisplayed()
      .then((result) => {
        expect(result).to.be.true;
      });
  }
);

When("I navigate to order history page", async function () {
  await element(By.id("navbarAccount")).click();
  await element(
    By.css("button[aria-label='Show Orders and Payment Menu']")
  ).click();
  await element(
    By.css("button[aria-label='Go to order history page']")
  ).click();
});

Then("I can see order history page", async function () {
  await browser.wait(
    EC.visibilityOf(
      element(By.xpath("//mat-card-title[contains(text(),'Order History')]"))
    ),
    50000
  );
});
