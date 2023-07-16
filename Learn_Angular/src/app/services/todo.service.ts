import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { todo } from '../models/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl:string='https://jsonplaceholder.typicode.com/todos';
  constructor(private hc:HttpClient) { }
  getTodos():Observable<todo[]>{
    return this.hc.get<todo[]>(this.apiUrl);
  }
}
