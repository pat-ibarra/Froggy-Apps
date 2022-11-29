import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const email = this.register.value.email;
    const password = this.register.value.password;
    const repeatPassword = this.register.value.repeatPassword;
    console.log(email, password, repeatPassword);
  }

}
