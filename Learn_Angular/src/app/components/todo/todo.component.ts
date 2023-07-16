import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos:todo[]=[]
  show=false;
  constructor(private todoService:TodoService) {
  }
  ngOnInit(): void {
      this.getTodos();
  }
  getTodos(){
   this.todoService.getTodos().subscribe(response=>{
    this.todos=response;
    this.show=true;
   })
  }
}
