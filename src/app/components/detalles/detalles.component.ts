import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  id: string | null;
  ids:string =this._articulosService.getId();;
  modelo:string=this._articulosService.getModelo();
  componentes:string=this._articulosService.getComponentes();
  descripcion:string=this._articulosService.getDescripcion();
  pagCompras:string=this._articulosService.getCompra();
  img:string=this._articulosService.getImg();

  constructor(private fb: FormBuilder,
      private _articulosService: ArticulosService,
      private router: Router,
      private aRoute: ActivatedRoute) { 
    
      this.id=this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id);
    }

  ngOnInit(): void {
  }

}
