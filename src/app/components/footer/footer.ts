import { Component } from '@angular/core';
import { Router, RouterLinkActive, RoutesRecognized } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'syn-footer',
  imports: [ButtonModule, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
    private currentRoute: string = "/";

    hideLayout: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((data) => {
            if (data instanceof RoutesRecognized) {
                this.currentRoute = data.url
                this.hideLayout = this.currentRoute === '/'
            }
        })
    }
}
