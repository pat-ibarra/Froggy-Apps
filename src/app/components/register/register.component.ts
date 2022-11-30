import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router, 
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.register.value.email;
    const password = this.register.value.password;
    const repeatPassword = this.register.value.repeatPassword;
    console.log(email, password, repeatPassword);

    if (password != repeatPassword) {
      alert("Las contraseñas no coinciden... inténtelo de nuevo...");
      return;
    }

    this.loading = true; 
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.loading = false; 
      this.router.navigate(['/login']);
      alert('Registro Exitoso!');
      console.log(user);
    })
    .catch((error) => {
      this.loading = false; 
      console.log(error);
      alert(this.firebaseError.codeError(error.code))
    })
  }

}
