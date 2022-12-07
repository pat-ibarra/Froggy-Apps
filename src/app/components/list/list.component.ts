import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ArticulosService } from 'src/app/services/articulos.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  articulos: any[]=[];

  constructor(private _articulosService: ArticulosService) {

  }

  ngOnInit(): void {
    this.getArticulos();
  }


  getArticulos(){
    this._articulosService.getArticulos().subscribe(data =>{
      data.forEach((element : any) => {
        this.articulos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.articulos);
    });
  }

  eliminarArt(id: string){
    this._articulosService.eliminarArt(id).then(() =>{
      console.log('articulo eliminado con exito');
    }).catch(error =>{
      console.log(error);
    })
  }
} 
