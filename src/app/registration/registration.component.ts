import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Iregister } from '../shared/model/register';
import { RegisterServices } from '../shared/services/register.services';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private registerServices: RegisterServices) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'UserLogin': this.fb.group({
        'email': ['', [Validators.required]],
        'password': ['', [Validators.required]]
      })
    })
  };

  Save(data: Iregister) {
    this.submitted = true;
    if (!this.registerForm.valid) { return }
    console.log(data);
    this.registerServices.Reigster(data).subscribe(item => {
      alert("registration successful");
      console.log(item);
      location.reload();
    })
  }

}
