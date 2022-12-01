import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {
  recuperarUsuario: FormGroup; 
  loading: boolean = false; 
 
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) { 
      this.recuperarUsuario = this.fb.group ({ 
        correo: ['', [Validators.required, Validators.email]]
      })
    }
  
  ngOnInit(): void {
  }

  recuperar() { 
    const email = this.recuperarUsuario.value.correo;  
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email)
    .then(() => { 
      alert('Se le envió un correo de confirmación a su cuenta.');
      this.router.navigate(['/login']);

    }).catch((error) => { 
      this.loading = false;
      alert(this.firebaseError.codeError(error.code));
    })
  }
}
