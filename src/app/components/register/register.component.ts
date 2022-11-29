import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {
    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
   }

  ngOnInit(): void {}

  registrar(){
    const email = this.register.value.email;
    const password = this.register.value.password;
    const repeatPassword = this.register.value.repeatPassword;

    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user)=> {
      console.log(user);
    }).catch((error) => {
      console.log(error);
      alert(this.firebaseError(error.code));
    })
  }

  firebaseError(code: string){

    switch(code){
      case 'auth/email-already-in-use':
        return 'El usuario ya existe.';
      case 'auth/weak-password':
        return 'La contraseña es muy debil.';
      case'auth/invalid-email':
        return 'El correo ingresado es invalido.';
      default:
        return 'Error desconocido';
    }

  } 

}
