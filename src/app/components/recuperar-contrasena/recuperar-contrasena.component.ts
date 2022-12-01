import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeService } from 'src/app/services/firebase-code.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {
  recuperarUser: FormGroup;
  loading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeService
    //private toastr: ToastrService
  ) {
    this.recuperarUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperar() {
    const email = this.recuperarUser.value.email;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email)
    .then(() => {
      //this.toastr.info('Correo enviado.', 'Recuperar Password')
      alert('Se envio un correo de reinicio de password a su cuenta.');
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading = false;
      alert(this.firebaseError.codeError(error.code));
      // this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
  }
}
