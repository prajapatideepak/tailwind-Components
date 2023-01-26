import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-action-button-success",
    templateUrl: "./simple-with-action-button-success.component.html",
})
export class SimpleWithActionButtonSuccessComponent implements OnInit {
    constructor() {}
    alert:boolean=false
 
    closeAlert() {
      this.alert=!this.alert
  }
  
    ngOnInit(): void {
      
    }
}
