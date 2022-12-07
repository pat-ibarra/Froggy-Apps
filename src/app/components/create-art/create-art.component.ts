import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-create-art',
  templateUrl: './create-art.component.html',
  styleUrls: ['./create-art.component.css']
})
export class CreateArtComponent implements OnInit {
  createArticulo: FormGroup;
  submitted=false;
  id: string | null;
  titulo = 'Agregar Empleado';

  constructor(private fb: FormBuilder,
              private _articulosService: ArticulosService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.createArticulo=this.fb.group({
      modelo: ["",Validators.required],
      componentes: ["",Validators.required],
      descripcion: ["",Validators.required],
      pagCompra: ["",Validators.required],
      img:["",Validators.required]
    })

    this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);

  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarEditarArt(){
    this.submitted=true;

    if(this.createArticulo.invalid){
      return;
    }

    if(this.id === null){
      this.agregarArt();
    }else{
      this.editarArt(this.id);
    }
  }

  agregarArt(){
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

  editarArt(id: string){
    const articulo: any ={
      modelo: this.createArticulo.value.modelo,
      componentes: this.createArticulo.value.componentes,
      descripcion: this.createArticulo.value.descripcion,
      pagcompra: this.createArticulo.value.pagCompra,
      img: this.createArticulo.value.img,
    
      fechaActualizacion: new Date()
    }

    this._articulosService.actualizarEmpleado(id, articulo).then(() => {
      console.log('El articulo ha sido modificado');
      this.router.navigate(['/list-articulos']);
    });
  
  }

  esEditar(){
    if(this.id !== null){
      this.titulo='Editar articulo';
      this._articulosService.getArti(this.id).subscribe(data => {
        console.log(data.payload.data()['modelo']);
        this.createArticulo.setValue({
          modelo: data.payload.data()['modelo'],
          componentes: data.payload.data()['componentes'],
          descripcion: data.payload.data()['descripcion'],
          pagcompra: data.payload.data()['pagCompra'],
          img: data.payload.data()['img']
        })
      });
    }
  }

}
