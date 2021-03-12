import { Component } from "@angular/core";

@Component({
  selector: "custom",
  template: `
    <h2>{{ "this is : " + getTitle() }}</h2>
    <ul *ngFor="let exemple of exemples">
      <li>{{ exemple }}</li>
    </ul>
  `
})
export class TestComponent {
  title = "liste of my exemple ngFor";
  exemples = ["ex1", "ex2", "ex3"];

  getTitle() {
    return this.title;
  }
}
