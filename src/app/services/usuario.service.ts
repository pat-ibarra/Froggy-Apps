import { Injectable } from '@angular/core';
import { Firestore, addDoc} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import Usuario from '../intefaces/usuario.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore:Firestore ) {  }

  addPlace(place: Usuario){
    const placeRef= collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

}
