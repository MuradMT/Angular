import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(){

  }

   data:Category[]=[
    {id:1,name:'My'},
    {id:2,name:'Your'},
    {id:3,name:'His'},];
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
