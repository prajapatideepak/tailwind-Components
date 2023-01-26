import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-multiple-action-success",
    templateUrl: "./simple-multiple-action-success.component.html",
})
export class SimpleMultipleActionSuccessComponent implements OnInit {
    constructor() {}
    notification: boolean = false;
  notificationBtn(){
    this.notification=!this.notification
  }
    ngOnInit(): void {
      
    }
}
