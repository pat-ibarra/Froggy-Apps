import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  dataUser: any;
  articulos: any[]=[];

  constructor(
    private _articulosService: ArticulosService, 
    private afAuth: AngularFireAuth, 
    private router: Router) { }

  ngOnInit(): void {
    this.getArticulos();
    this.afAuth.currentUser.then(user => { 
      if(user && user.emailVerified) { 
        this.dataUser = user; 
      } else { 
        this.router.navigate(['/login']);
      }
    })
  }
  
  logOut() { 
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
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
