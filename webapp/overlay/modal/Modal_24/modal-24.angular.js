import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal36',
  templateUrl: './modal36.component.html'
})
export class Modal36Component implements OnInit {
  modal: boolean = false;
  modalBtn(){
    this.modal=!this.modal
  }
  constructor() { }

  ngOnInit(): void {
  }

}
