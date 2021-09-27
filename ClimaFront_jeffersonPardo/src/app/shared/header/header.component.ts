import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hasUser = false;

  constructor(
    private auth:AuthService,
    private router:Router,
    public fireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  CerrarSesion(){
    alert ('Se cerrará la sesión');
    this.auth.logout()
    .then(() => {
      this.router.navigate(['./home']);
    })
  }

}
