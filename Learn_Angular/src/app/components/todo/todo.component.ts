import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { todo } from 'src/app/models/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos:todo[]=[]
  apiUrl:string='https://jsonplaceholder.typicode.com/todos';
  constructor(private hc:HttpClient) {
  }
  ngOnInit(): void {
      this.getTodos();
  }
  getTodos(){
    this.hc.get<todo[]>(this.apiUrl).subscribe(response=>{
      this.todos=response;
    });
    return this.todos;// [{id:1,userId:1,title:'hi',completed:true}]
  }
}
