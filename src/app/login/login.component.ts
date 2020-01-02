import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      Username: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

}
