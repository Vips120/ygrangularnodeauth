import { Component, OnInit } from '@angular/core';
import { LoginServices } from '../shared/services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userDetails: any;
  constructor(private loggedUser: LoginServices,private router: Router) { }

  ngOnInit() {
    this.loggedUser.LoggedInUser().subscribe(data => {
      this.userDetails = data;
    }, err => {
        console.log(err.error.message);
    })
  };

  Logout() {
    this.loggedUser.LogoutUser();
    this.router.navigateByUrl("/login");
  }

}
