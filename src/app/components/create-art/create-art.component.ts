import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-create-art',
  templateUrl: './create-art.component.html',
  styleUrls: ['./create-art.component.css']
})
export class CreateArtComponent implements OnInit {
  createArticulo: FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder,
              private _articulosService: ArticulosService,
              private router: Router) {
    this.createArticulo=this.fb.group({
      modelo: ["",Validators.required],
      componentes: ["",Validators.required],
      descripcion: ["",Validators.required],
      pagCompra: ["",Validators.required],
      img:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarArt(){
    this.submitted=true;

    if(this.createArticulo.invalid){
      return;
    }

    const articulo: any ={
      modelo: this.createArticulo.value.modelo,
      componentes: this.createArticulo.value.componentes,
      descripcion: this.createArticulo.value.descripcion,
      pagcompra: this.createArticulo.value.pagCompra,
      img: this.createArticulo.value.img,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    
    this._articulosService.agregarArticulo(articulo).then(()=>{
      console.log('empleado registrrado con exito!');
      this.router.navigate(['/list-articulos']);
    }).catch(error =>{
      console.log(error);
    })
  }

}
