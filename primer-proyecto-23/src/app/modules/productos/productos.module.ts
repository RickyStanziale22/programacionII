import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardComponent } from './components/card/card.component';
import { ProductoComponent } from '../producto/pages/producto/producto.component';


@NgModule({
  declarations: [
    CardComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    CardComponent,
    ProductoComponent
  ]
})
export class ProductosModule { }
