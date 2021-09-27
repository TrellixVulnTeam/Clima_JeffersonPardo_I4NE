import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  sing_up_form: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.sing_up_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, MyValidators.validacionContrasena]]
    });
  }

  register (event: Event){
    event.preventDefault();
    if(this.sing_up_form.valid){
     const value = this.sing_up_form.value;
     this.authService.createUser(value.email, value.password)
     .then( () => {
       this.router.navigate(['./home']);
     } )
     ;
    }
    console.log(this.sing_up_form.value);

  }

  login(event: Event){
    console.log('event');
  }

  get emailField() {
    return this.sing_up_form.get('email');
  }

  get passwordField() {
    return this.sing_up_form.get('password');
  }

}
