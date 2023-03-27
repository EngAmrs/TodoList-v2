import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import {TodoService} from '../../Services/todo.service'
import { UserDataService } from '../../Services/user-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})



export class TodoListComponent{
//header
text: string = "What are we gonna do?";
inputValue: string = "";
myTodos:Todo[] = [];


constructor(protected _todos: TodoService, private user: UserDataService){

  this.myTodos = this._todos.getAllTodo();
  this._todos.addDataToLocal();
  }

  //(deleted)="update()"
  update() {
    this.myTodos = this._todos.getAllTodo()
  }

}