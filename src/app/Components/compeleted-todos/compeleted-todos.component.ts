import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import { TodoService } from '../../Services/todo.service';


@Component({
  selector: 'app-compeleted-todos',
  templateUrl: './compeleted-todos.component.html',
  styleUrls: ['./compeleted-todos.component.css']
})

export class CompeletedTodosComponent {
  compeleted: Todo[] = []
  constructor(private _todos: TodoService){
    this.compeleted = _todos.getCompletedTodo();
  }
  
}
