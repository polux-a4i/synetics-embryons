import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RoutesRecognized } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Lang } from '../lang/lang';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'syn-navbar',
  imports: [Lang, ButtonModule, RouterLink, RouterLinkActive, DrawerModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
    private currentRoute: string = "/";

    hideMenu: boolean = false;
    showDrawer: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((data) => {
            if (data instanceof RoutesRecognized) {
                this.currentRoute = data.url
                this.hideMenu = this.currentRoute === '/'
            }
        })
    }
}
