import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
   products:Product[]=
   [{id:1,productName:'Laptop'},
   {id:2,productName:'Headphone'},
   {id:3,productName:'Phone'},
   {id:4,productName:'Playstation'},
   {id:5,productName:'Xbox'}];
}
