import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeService } from 'src/app/services/firebase-code.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  loading: boolean= false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeService
    //private toastr: ToastrService
    ){
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.loading=true;
    this.afAuth.signInWithEmailAndPassword(email,password).then((user) =>{
      console.log(user);
      this.router.navigate(['/catalogo']);
    }).catch((error) => {
      this.loading = false;
      alert(this.firebaseError.codeError(error.code));
      // this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
    console.log(email,password)

  }
}
