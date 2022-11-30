import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

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
    private router: Router
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
      alert(this.firebaseError(error.code))
    })
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ingresado ya existe...'
        break;
      case 'auth/weak-password':
        return 'La contraseña es muy débil... Prueba con otra'
        break;
      case 'auth/invalid-email':
        return 'Correo electrónico o contraseña no válidos...'
        break;
      case 'auth/missing-email':
        return 'Correo electrónico o contraseña no válidos...'
        break;
      case 'auth/internal-error':
        return 'Las contraseñas no coinciden... verifique e intente de nuevo...'
        break;
      default:
        return 'Error desconocido... inténtelo más tarde...'
    }
  }
}
