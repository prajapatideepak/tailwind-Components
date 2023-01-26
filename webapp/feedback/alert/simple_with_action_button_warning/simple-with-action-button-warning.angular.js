import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-action-button-warning",
    templateUrl: "./simple-with-action-button-warning.component.html",
})
export class SimpleWithActionButtonWarinngComponent implements OnInit {
    constructor() {}

    alert:boolean=false
 
    closeAlert() {
      this.alert=!this.alert
  }
    ngOnInit(): void {
      
    }
}
