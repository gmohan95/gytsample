import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {
    MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
    MatInputModule, MatNativeDateModule, MatTabsModule, MatSidenavModule, MatIconModule
} from '@angular/material';

@NgModule({
    imports: [RouterModule, CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule,MatTabsModule],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})

export class SidebarModule { }
