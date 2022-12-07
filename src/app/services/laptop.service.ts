import { Injectable } from '@angular/core';
import { Firestore, collectionData} from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Laptop from '../intefaces/laptop.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore:Firestore ) {  }

  getPlace(): Observable<Laptop[]>{
    const placeRef=collection(this.firestore, 'laptop')
    return collectionData(placeRef, {idField: 'id'}) as Observable<Laptop[]>;
}

}