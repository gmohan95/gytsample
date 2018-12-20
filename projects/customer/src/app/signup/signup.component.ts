import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    disabled:boolean = false;
    submitted:boolean = false;
    singUpForm:FormGroup;
    constructor(private fb:FormBuilder, private router: Router) {

    }

    ngOnInit() {
      this.singUpForm  = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password :['',Validators.required]
      });
    }

    // convenience getter for easy access to form fields
    get f() { return this.singUpForm.controls; }

    signUp(){
      this.submitted = true;

      // stop here if form is invalid
      if (this.singUpForm.invalid) {
          return;
      }

      this.disabled = true;
      this.router.navigate(['/home/mywallet'])


    }

}
