import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-form-card-user-profile",
    templateUrl: "./form-card-user-profile.component.html",
})
export class FormCardUserProfileComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        let form: any = document.getElementById("form");
        form.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();
                let elements = form.elements;
                let payload = {};
                for (let i = 0; i < elements.length; i++) {
                    let item = elements.item(i);
                    switch (item.type) {
                        case "checkbox":
                            payload[item.name] = item.checked;
                            break;
                        case "submit":
                            break;
                        default:
                            payload[item.name] = item.value;
                            break;
                    }
                }
                // Place your API call here to submit your payload.
                // console.log("payload", payload);
            },
            true
        );
    }
}
