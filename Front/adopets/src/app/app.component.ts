import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formSingIn = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),]),
    password: new FormControl('', Validators.required,),
  });


  formProvisorio = new FormGroup({
    havePets: new FormControl(''),
    howPets: new FormControl(''),
    sizePets: new FormControl(''),
    agePets: new FormControl(''),
    genderPets: new FormControl(''),

  });
  
  formSingUp = new FormGroup({
    nameUser: new FormControl(''),
    lastnameUser: new FormControl(''),
    ageUser: new FormControl(''),
    emailUser: new FormControl(''),
    passwordUser: new FormControl(''),
    phoneUser: new FormControl(''),
  });

  formUserData = new FormGroup({
    nameUser: new FormControl(''),
    lastnameUser: new FormControl(''),
    ageUser: new FormControl(''),
    addresUser: new FormControl(''),
    neighborhoodUser: new FormControl(''),
    provinceUser: new FormControl(''),
    phoneUser: new FormControl(''),
    secondPhoneUser: new FormControl(''),
  })

  loginSubmitt: boolean;
  title = 'adopets';
  hide: boolean = true;

  constructor() {
    this.loginSubmitt = false;
  }

  onSubmitLogin() {
    this.loginSubmitt = true;
    console.table(this.formSingIn.value.email);

    let emailogin = this.formSingIn.value.email;
    let passwordlogin = this.formSingIn.value.password;

  }


  onSubmitProvi() {
    console.log(this.formProvisorio.value);

  }

  onSubmitUserData() {
    console.table(this.formUserData.value);
  }

}
