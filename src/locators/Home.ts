import { ElementFinder, element, by } from "protractor";

export class HomePage {
  getStarted: ElementFinder;
  searchResult: ElementFinder;
  constructor() {
    this.getStarted = element(
      by.cssContainingText("a[href='docs']", "Get Started")
    );
    this.searchResult = element(by.css("div[class='search-results']"));
  }
}
