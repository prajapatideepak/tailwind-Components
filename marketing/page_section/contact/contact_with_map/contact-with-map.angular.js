import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-contact-with-map",
    templateUrl: "./contact-with-map.component.html",
})
export class ContactWithMapComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        let form: any = document.getElementById("contact");
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
                // console.log('payload', payload);
            },
            true
        );
    }
}
