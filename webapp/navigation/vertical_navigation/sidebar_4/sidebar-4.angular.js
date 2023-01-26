import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  addColor :string='personal';
  nav:boolean=true;
  navBtn(){
    this.nav=!this.nav
  }
  constructor() { }

  ngOnInit(): void {
  }

}
