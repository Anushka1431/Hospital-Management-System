import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  username2 = 'user'
  password2 = ''
  invalidLogin = false

  constructor(private router:Router, public loginservice: AdminauthService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username2, this.password2)
    ) {
      this.router.navigate(['admin'])
      
      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("Wrong Credentials");
      this.router.navigate(['home'])
    }
      
  }
}
