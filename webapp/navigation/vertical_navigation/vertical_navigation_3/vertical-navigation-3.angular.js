import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-navigation-three',
  templateUrl: './vertical-navigation-three.component.html',
})
export class VerticalNavigationThreeComponent implements OnInit {
  status: boolean = false;
  clickEvent() {
      this.status = !this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
