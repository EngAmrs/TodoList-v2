import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-favourite-todos',
  templateUrl: './favourite-todos.component.html',
  styleUrls: ['./favourite-todos.component.css']
})
export class FavouriteTodosComponent {
  favourite: Todo[] = []
  constructor(private _todos: TodoService){
    this.favourite = _todos.getFavouriteTodo();
  }
}
