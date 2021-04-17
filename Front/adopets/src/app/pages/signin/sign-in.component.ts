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

}
