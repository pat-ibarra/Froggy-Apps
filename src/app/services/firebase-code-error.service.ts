import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) { 

      //Mensajes de Error - Register 
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

      //Mensajes de Error - Login 
      case 'auth/wrong-password':
        return 'Contraseña Incorrecta...'
        break; 

      case 'auth/user-not-found':
        return 'El Usuario no existe...'
        break;  
        
      default:
        return 'Error desconocido... inténtelo más tarde...'
    } 
  }
}
