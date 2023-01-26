import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-card-with-inputs",
  templateUrl: "./form-card-with-inputs.component.html",
})
export class FormCardWithInputsComponent implements OnInit {
  constructor() {}
  personFirstName: string;
  personLastName: string;
  personEmail: string;
  streetAdress: string;
  personCountry: string;
  personstate: string;
  personZip: string;
  onnameChange(event) {
    event.preventDefault();
    console.log("First Name", this.personFirstName);
    console.log("Last Name", this.personLastName);
    console.log("Email", this.personEmail);
    console.log("streetAdress", this.streetAdress);
    console.log("personCountry", this.personCountry);
    console.log("personstate", this.personstate);
    console.log("personZip", this.personZip);
  }

  ngOnInit(): void {}
}
