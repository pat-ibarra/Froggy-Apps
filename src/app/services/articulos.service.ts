import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  id:string ="";
  modelo:string="";
  componentes:string="";
  descripcion:string="";
  pagCompras:string="";
  img:string="";

  constructor(private firestore: AngularFirestore) { }

  agregarArticulo(articulo: any): Promise<any>{
    return this.firestore.collection('laptop').add(articulo);

  }

  getArticulos(): Observable<any> {
    return this.firestore.collection('laptop', ref=>ref.orderBy('modelo','asc')).snapshotChanges();
  }

  eliminarArt(id: string): Promise<any>{
    return this.firestore.collection('laptop').doc(id).delete();
  }

  getArti(id : string): Observable<any>{
    return this.firestore.collection('laptop').doc(id).snapshotChanges();
  }

  actualizarEmpleado(id: string, data:any):Promise<any>{
    return this.firestore.collection('laptop').doc(id).update(data);
  }



}
