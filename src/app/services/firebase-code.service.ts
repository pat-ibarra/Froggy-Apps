import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      // El correo ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe.';
      // El usuario no existe.
      case 'auth/user-not-found':
        return 'El usuario no existe.';
      // Contraseña debil
        case 'auth/weak-password':
        return 'La contraseña es muy debil.';
      //Contraseña incorrecta.
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      // El correo es invalido
      case 'auth/invalid-email':
        return 'El correo ingresado es invalido.';
      default:
        return 'Error desconocido';
    }

  }

}

