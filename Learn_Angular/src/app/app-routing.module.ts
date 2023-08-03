import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'todos',component:TodoComponent},
  {path:'',component:TodoComponent},
  {path:'todos/category/:id',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
