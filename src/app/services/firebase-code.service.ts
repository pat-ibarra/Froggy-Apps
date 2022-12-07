import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnmu } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      // El correo ya existe
      case FirebaseCodeErrorEnmu.EmailAlreadyInUse:
        return 'El usuario ya existe.';
      // El usuario no existe.
      case FirebaseCodeErrorEnmu.UserNotFound:
        return 'El usuario no existe.';
      // Contraseña debil
        case FirebaseCodeErrorEnmu.WeakPwd:
        return 'La contraseña es muy debil.';
      //Contraseña incorrecta.
      case FirebaseCodeErrorEnmu.WrongPwd:
        return 'La contraseña es incorrecta.';
      // El correo es invalido
      case FirebaseCodeErrorEnmu.InvalidEmail:
        return 'El correo ingresado es invalido.';
      default:
        return 'Error desconocido';
    }

  }

}

