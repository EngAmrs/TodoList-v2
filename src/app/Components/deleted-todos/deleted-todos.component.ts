import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})
export class DeletedTodosComponent {
  deleted: Todo[] = []
  constructor(private _todos: TodoService){
    this.deleted = _todos.getDeletedTodo();
  }
}
