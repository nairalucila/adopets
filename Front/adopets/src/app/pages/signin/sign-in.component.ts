import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formSingIn = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required,),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitLogin() {
    console.table(this.formSingIn.value.email);

    let emailogin = this.formSingIn.value.email;
    let passwordlogin = this.formSingIn.value.password;

  }

  getPasswordErrorMessage() {
    if (this.formSingIn.get('password').hasError('required')) {
      return 'You must enter a value';
    }
  }

  getEmailErrorMessage() {
    if (this.formSingIn.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.formSingIn.get('email').hasError('email') ? 'Not a valid email' : '';
  }
 
}
