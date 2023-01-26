import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-action-links-success",
    templateUrl: "./simple-with-action-links-success.component.html",
})
export class SimpleWithActionLinksSuccessComponent implements OnInit {
    constructor() {}

    alert:boolean=false
 
    closeAlert() {
      this.alert=!this.alert
  }
    ngOnInit(): void {
     
    }
}
