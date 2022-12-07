import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeService } from 'src/app/services/firebase-code.service';

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
    //private toastr: ToastrService
    private firebaseError: FirebaseCodeService
    ){
    this.register = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
    })
   }

  ngOnInit(): void { }

  registrar() {
    const email = this.register.value.email;
    const password = this.register.value.password;
    const repeatPassword = this.register.value.repeatPassword;

    console.log(repeatPassword)

    // if(password!= repetirPassword)[
    //   alert(this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error'));
    //  return;
    // ]

    this.loading=true;
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.verificarCorreo();
      }).catch((error) => {
        this.loading=false;
        // this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
        console.log(error);
        alert(this.firebaseError.codeError(error.code));
      })
  }
  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        // this.toastr.info('Le enviamos un correo electronico para su verificación', 'Verificar Correo ');
        this.router.navigate(['/login']);
      });
  }

}
