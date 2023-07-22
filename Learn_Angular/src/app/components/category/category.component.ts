import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
   data:Category[]=[
    {name:'My'},
    {name:'Your'},
    {name:'His'},];
   category:Category;
   getCategory(item:Category){
        this.category=item;
   }
   getClass(item:Category){
    if(item==this.category){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
   }
}
