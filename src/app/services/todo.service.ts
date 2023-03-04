import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../product/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  path = 'https://jsonplaceholder.typicode.com/todos';
  constructor(
    private http: HttpClient
  ) { }


  getAllTodos()
  {
    return this.http.get<Todo[]>(this.path);
  }


  createTodo(todo: Todo)
  {
    return this.http.post<Todo>(this.path, todo);
  }

}
