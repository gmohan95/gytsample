import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // email validation hasbeen checked here
      email: ['', [Validators.required, Validators.email]],
      // password length hasbeen checked here
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    // Success alert with timer
    // swal({
    //   type: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    // Error alert with timer
    // swal({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   type: 'error',
    //   confirmButtonText: 'OK',
    //   // timer: 1500
    // })

    // example link reference
    // https://sweetalert2.github.io/
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // if form is invalid stop here 
    if (this.registerForm.invalid) {
      return;
    }
    // Data which has been returned in this console
    console.log(this.registerForm.value);
    swal({
      type: 'success',
      title: 'User has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
