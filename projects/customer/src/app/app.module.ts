import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
// Materials
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

// Services
import { HttpinterceptorService } from './services/interceptor.service';
import { CommonService } from './services/common.service';
import { AuthguardService } from './services/authguard.service';

// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
// Module
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { MygiftcardsComponent } from './mygiftcards/mygiftcards.component';
import { ThemeComponent } from './theme/theme.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    MywalletComponent,
    MygiftcardsComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,ReactiveFormsModule,
    NgbModule, SweetAlert2Module,
    MatCheckboxModule,
    MatButtonModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [AuthguardService,
    CommonService,
    HttpinterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
