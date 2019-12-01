import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Ilogin} from '../shared/model/register';
import { LoginServices } from '../shared/services/login.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: FormGroup;
  public submitted: boolean = false;
  public showError: any;
  constructor(private fb: FormBuilder,private loginServices: LoginServices, private router: Router) { }

  ngOnInit() {
    this.userLogin = this.fb.group({
      'UserLogin': this.fb.group({
        email: ['', Validators.required],
        password:['', Validators.required]
       })
     })
  };
  Auth(data: Ilogin) {
    console.log(data);
    this.submitted = true;
    if (!this.userLogin.valid) { return; }
    this.loginServices.Login(data).subscribe(item => {
      console.log(item);
      alert("login successful");
      this.router.navigateByUrl("/home");

    }, err => {
        let { error } = err;
        this.showError = error.message;
    })
  }

}
