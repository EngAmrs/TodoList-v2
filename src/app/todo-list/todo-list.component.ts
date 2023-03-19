import { Component } from '@angular/core';


interface Todo{
  readonly id: number,
  task: string,
  status: boolean
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})



export class TodoListComponent{
  constructor(){

  }

//header
text: string = "What are we gonna do?";

//Tasks
inputValue: string = "";
todos: Todo[] = [];
id: number = 1
//Add tasks
setData(): void{
  if(!this.inputValue) return
  this.todos.push({id: this.id, task: this.inputValue, status: false});
  this.id++;
}

//check tasks
checkTask(index: number): void{
  this.todos[index].status = !this.todos[index].status;
}

//remove tasks
removeTask(index: number): void{
  this.todos.splice(index, 1);
}


}