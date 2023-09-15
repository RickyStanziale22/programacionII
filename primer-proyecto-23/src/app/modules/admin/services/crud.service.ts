import { Injectable } from "@angular/core"; //injectable correspondeal servicio
import { Producto } from "src/app/models/producto";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private ProductoCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.ProductoCollection = database.collection('productos')
   }
//CRUD -> PRODUCTOS
 crearProducto(producto:Producto){

 } 
}
