import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-action-links-error",
    templateUrl: "./simple-with-action-links-error.component.html",
})
export class SimpleWithActionLinksErrorComponent implements OnInit {
    constructor() {}
    alert:boolean=false
 
    closeAlert() {
      this.alert=!this.alert
  }
   
    ngOnInit(): void {
       
    }
}
