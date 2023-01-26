import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-action-links-info",
    templateUrl: "./simple-with-action-links-info.component.html",
})
export class SimpleWithActionLinksInfoComponent implements OnInit {
    constructor() {}
    alert:boolean=false
 
    closeAlert() {
      this.alert=!this.alert
  }
    
    ngOnInit(): void {
       
    }
}
