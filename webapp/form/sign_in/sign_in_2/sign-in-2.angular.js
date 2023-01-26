import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
 
})
export class SignInComponent implements OnInit {
  pass: boolean = false;
  clickEvent() {
      this.pass = !this.pass;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
