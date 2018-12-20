import { Component, OnInit } from '@angular/core';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // alert();
  }

}
