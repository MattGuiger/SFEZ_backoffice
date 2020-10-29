import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
    selector: 'msw-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    constructor(private router: Router,
        private route: ActivatedRoute) {
    }
    page: string = "Wizard";
    ngOnInit() {
        this.router.events
            //.filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                let currentRoute = this.route.root;
                while (currentRoute.children[0] !== undefined) {
                    currentRoute = currentRoute.children[0];
                }
                this.page = currentRoute.snapshot.data["title"];
            })
    }
    redirectToPersonalPage() {
        this.page = "Wizard";
        this.router.navigateByUrl('/forms/ngx/wizard', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    redirectToWorkPage() {
        this.page = "Work";
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    redirectToTagsPage() {
        this.page = "Tags";
        this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    redirectToDescriptionPage() {
        this.page = "Description";
        this.router.navigateByUrl('/forms/ngx/description', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    redirectToSchedulePage() {
        this.page = "Schedule";
        this.router.navigateByUrl('/forms/ngx/schedule', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    
}