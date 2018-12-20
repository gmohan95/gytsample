import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  disabled:boolean = false;
  submitted:boolean = false;
  singInForm:FormGroup;
  constructor(private fb:FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.singInForm  = this.fb.group({
    email:['',Validators.required],
    password :['',Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.singInForm.controls; }

  signUp(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.singInForm.invalid) {
        return;
    }

    this.disabled = true;
    this.router.navigate(['/home/mywallet'])


  }

}
