import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-action-links-warning",
    templateUrl: "./simple-with-action-links-warning.component.html",
})
export class SimpleWithActionLinksWarningComponent implements OnInit {
    constructor() {}

    alert:boolean=false
 
    closeAlert() {
      this.alert=!this.alert
  }
    ngOnInit(): void {
      
    }
}
