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


  constructor(private fb: FormBuilder,
      private _articulosService: ArticulosService,
      private router: Router,
      private aRoute: ActivatedRoute) { 
    

    }

  ngOnInit(): void {
  }

}
