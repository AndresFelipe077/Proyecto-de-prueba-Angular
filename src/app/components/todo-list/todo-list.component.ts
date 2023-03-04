import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/product/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  title!: string;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getAllTodos()
      .subscribe(todos => {
        this.todos = todos;
      }
      );

  }

  addTodo() {
    const newTodo: Todo = {
      title: this.title,
      id: '3000',
      userId: '1',
      completed: false,
    };
    this.todoService.createTodo(newTodo)
      .subscribe(
        todo => {
          console.log(todo);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateTodo() {

  }

  OnDeleteTodo(todoId: string) {
    console.log(todoId);
  }

}
