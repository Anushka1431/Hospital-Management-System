import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
  username = 'user'
    password = ''
    invalidLogin = false

  constructor(private router:Router, public loginservice: DocauthService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['docdash'])
      
      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("Wrong Credentials");
      this.router.navigate(['home'])
    }
      
  }
}
