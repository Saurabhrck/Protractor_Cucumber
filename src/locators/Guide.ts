import { ElementFinder, element, by } from "protractor";

export class Guide {
  title: ElementFinder;
  searchBox: ElementFinder;
  introCard: ElementFinder;

  constructor() {
    this.title = element(by.id("what-is-angular"));
    this.searchBox = element(by.css("input[type='search']"));
    this.introCard = element(
      by.css("div[class='card-container'] a[href='guide/what-is-angular']")
    );
  }
}
