import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: todo[] = [];
  show = false;
  constructor(private todoService: TodoService, private ar: ActivatedRoute) {}
  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (params['id']) {
        this.getTodosByCategory(params['id']);
      } else {
        this.getTodos();
      }
    });
  }
  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
      this.show = true;
    });
  }
  getTodosByCategory(num: number) {
    this.todoService.getTodosByCategory(num).subscribe((response) => {
      let some: todo[] = [];
      response.forEach((item) => {
        if (item.userId == num) {
          some.push(item);
        }
        this.todos=some;
      });
    });
    this.show = true;
  }
}
