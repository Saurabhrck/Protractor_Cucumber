import { ElementFinder, element, by } from "protractor";

export class HomePage {
  getStarted: ElementFinder;
  searchResult: ElementFinder;
  constructor() {
    this.getStarted = element(by.xpath("//a[text()='Get Started']"));
    this.searchResult = element(by.css("div[class='search-results']"));
  }
}
