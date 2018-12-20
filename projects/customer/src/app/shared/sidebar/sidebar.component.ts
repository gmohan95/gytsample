import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

declare var $: any;
declare let device: any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    { path: '/Homescreen/myaccount', title: 'My Account', icontype: 'ti-panel', type: 'link', },
    { path: '/Homescreen/billing', title: 'Billing', icontype: 'ti-user', type: 'link', },
    { path: '/Homescreen/findduck', title: 'Find A Duck', icontype: 'ti-view-list-alt', type: 'link', },
    { path: '/Homescreen/howtoride', title: 'How to Ride', icontype: 'ti-map', type: 'link', },
    { path: '/Homescreen/safety', title: 'Safety', icontype: 'ti-text', type: 'link', },
    { path: '/Homescreen/ridehistory', title: 'Ride History', icontype: 'ti-pencil-alt2', type: 'link', },
    { path: '/Homescreen/support', title: 'Support', icontype: 'ti-map', type: 'link', },
    // { path: 'version', title: environment.Version, icontype: environment.Versionimage, type: 'link' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.css']
})

export class SidebarComponent {
    mobileQuery: MediaQueryList;

    public menuItems: any[];
    private _mobileQueryListener: () => void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router) {
        // this.menuItems = ROUTES;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        console.log(this.mobileQuery);

        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        // if (this.mobileQuery.matches) {
        //     alert('true');
        // } else {
        //     alert('false');
        // }
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    close() {
        document.getElementById("mySidenav").style.width = "0";
    }
    open() {
        document.getElementById("mySidenav").style.width = "295px";
    }
}
