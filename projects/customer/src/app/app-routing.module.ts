import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthguardService } from './services/authguard.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { MygiftcardsComponent } from './mygiftcards/mygiftcards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'auth', component: AuthComponent, canActivate: [AuthguardService], data: { Key: 'Authcomponnet' },
  },
  { path: 'signup', component: SignupComponent, data: { Key: 'SignupComponent' } },
  { path: 'signin', component: SigninComponent, data: { Key: 'SigninComponent' } },
  {
    path: 'home', component: HomeComponent, data: { Key: 'HomeComponent' },
    children: [
      { path: 'mywallet', component: MywalletComponent, data: { key: 'MywalletComponent' } },
      { path: 'mygiftcards', component: MygiftcardsComponent, data: { key: 'MygiftcardsComponent' } }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
