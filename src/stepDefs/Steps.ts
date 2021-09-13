import { Given, Then, When } from "@cucumber/cucumber";
import { browser, protractor } from "protractor";
import { HomePage } from "../locators/Home";
import { Guide } from "../locators/Guide";
import chai from "chai";

const expect = chai.expect;
const homePage = new HomePage();
const guidePage = new Guide();

Given("I open angular homepage", async function () {
  await browser.get("https://angular.io/");
});
Given("I navigate to documents", async function () {
  await homePage.getStarted.click();
});
When("I type in {string}", async function (string: string) {
  await guidePage.searchBox.sendKeys(string);
});
When("I click on first page", async function () {
  await guidePage.introCard.click();
});
Then("I land on first page", async function () {
  await guidePage.title.isDisplayed().then((val) => {
    expect(val).to.equal(true);
  });
});
Then("search result is visible", async () => {
  await homePage.searchResult.isDisplayed().then((result) => {
    expect(result).to.be.true;
  });
});
