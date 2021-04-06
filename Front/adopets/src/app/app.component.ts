import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formSingIn = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  title = 'adopets';

  constructor(){ }

  onSubmit(){
    console.log(this.formSingIn.value)
  }

}
