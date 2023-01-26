import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
    mobileMenu;
    active;
    url;
  constructor(private router: Router) {
        // this.url = router.url;
        this.url = window.location.pathname;
    }

    ngOnInit(): void {

    }
  
}

