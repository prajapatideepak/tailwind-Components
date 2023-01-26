import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-half-page-with-image",
  templateUrl: "./half-page-with-image.component.html",
})
export class HalfPageWithImageComponent implements OnInit {
  constructor() {}
  username: string;
  password: string;
  onnameChange(event) {
    event.preventDefault();
    console.log("username", this.username);
    console.log("password", this.password);
  }
  ngOnInit(): void {}
}
