import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo:any

  constructor(protected _todos: TodoService){
  }

}
