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
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void { }

  registrar() {
    const email = this.register.value.email;
    const password = this.register.value.password;
    const repeatPassword = this.register.value.repeatPassword;

    // if(password!= repetirPassword)[
    //   alert(this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error'));
    //  return;
    // ]

    this.loading=true;
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loading = false;
        // this.toastr.sucess('El usuario fue registrado con exito!', 'Usuario registrado');
        this.router.navigate(['/login']);
      }).catch((error) => {
        this.loading=false;
        // this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
        console.log(error);
        alert(this.firebaseError.codeError(error.code));
      })
  }
}
