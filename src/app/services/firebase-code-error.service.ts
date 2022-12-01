import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) { 

      //Mensajes de Error - Register 
      case FirebaseCodeErrorEnum.EmailAlReadyInUse:
        return 'El usuario ingresado ya existe...'
        break;
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy débil... Prueba con otra'
        break;
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo electrónico o contraseña no válidos...'
        break;
      case FirebaseCodeErrorEnum.MissingEmail:
        return 'Correo electrónico o contraseña no válidos...'
        break;
      case FirebaseCodeErrorEnum.InternalError:
        return 'Las contraseñas no coinciden... verifique e intente de nuevo...'
        break; 

      //Mensajes de Error - Login 
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña Incorrecta...'
        break; 

      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El Usuario no existe...'
        break;  

      default:
        return 'Error desconocido... inténtelo más tarde...'
    } 
  }
}
