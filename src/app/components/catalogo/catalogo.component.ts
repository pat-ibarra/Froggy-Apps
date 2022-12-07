import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  articulos: any[]=[];

  constructor(private _articulosService: ArticulosService) { }

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
}
