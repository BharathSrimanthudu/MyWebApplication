import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Username: string;
  SignupForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  login = false;
  ngOnInit() {
    this.SignupForm = new FormGroup({
      Username: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  OnLogin() {
    this.login = true;
  }

}
