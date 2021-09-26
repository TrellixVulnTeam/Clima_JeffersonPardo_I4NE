import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form: FormGroup;
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
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(event: Event){
    event.preventDefault();
    if(this.login_form.valid){
      const value = this.login_form.value;
      this.authService.login(value.email,value.password)
      .then( () => {
        this.router.navigate(['/clima']);
      })
      .catch(() => {
        alert('No es valido');
      })
      ;
      console.log(value);
    }
  }

  get emailField() {
    return this.login_form.get('email');
  }

  get passwordField() {
    return this.login_form.get('password');
  }

}
