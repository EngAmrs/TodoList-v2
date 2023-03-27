import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../Interfaces/todo';
import { UserDataService } from './user-data.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

//vars
percentage = new BehaviorSubject((this.getCompletedTodo().length/this.getAllTodo().length) * 100)
percentage$ = this.percentage.asObservable();
todosCounter = new BehaviorSubject({completed: this.getCompletedTodo().length, 
                                    deleted: this.getDeletedTodo().length,
                                    favorite: this.getFavouriteTodo().length})
todosCounter$ = this.todosCounter.asObservable();


constructor(private user: UserDataService) { 
}


//Incremental ID
incrementalId() : number{
  if(this.todos.length === 0) return 1

  let newId: number = this.todos[this.todos.length - 1].id

  return ++newId;
}

setData(inputValue: string): void{
    if(!inputValue) return
    this.todos.push({id: this.incrementalId(), task: inputValue, isCompleted: false, isDeleted: false, isFavorite: false, userId: this.user.currentUser});
    this.addDataToLocal();
    this.getpersentage();
  }

completeTask(id: number){
 let task: Todo | undefined = this.todos.find(todo => todo.id === id)
 if(task)
  task.isCompleted = !task.isCompleted;

  this.addDataToLocal();
  this.getpersentage();
  this.getTodoscount();
}

deleteTask(id: number)  {
  let task: Todo | undefined = this.todos.find(todo => todo.id === id)
 
  if(task){
   task.isDeleted = !task.isDeleted;
   task.isCompleted = false;
   task.isFavorite = false;
  }
   this.addDataToLocal();
   this.getpersentage();
   this.getTodoscount();
}

addFavorite(id: number){

  let task: Todo | undefined = this.todos.find(todo => todo.id === id)
  
  if(task)
   task.isFavorite = !task.isFavorite;

   this.addDataToLocal();
   this.getTodoscount();
 }

addDataToLocal(){ 
     localStorage.setItem("todos", JSON.stringify(this.todos));
   }


 //Getters

getAllTodo(){    
  return this.todos.filter(todo => todo.userId === this.user.currentUser && !todo.isDeleted );
} 
getCompletedTodo(){
  return this.todos.filter(todo => todo.isCompleted && !todo.isDeleted && todo.userId === this.user.currentUser );
}

getDeletedTodo(){
  return this.todos.filter(todo => todo.isDeleted && todo.userId === this.user.currentUser );
}

getFavouriteTodo(){
  return this.todos.filter(todo => todo.isFavorite && todo.userId === this.user.currentUser );
}

getpersentage(){
  return this.percentage.next((this.getCompletedTodo().length/(this.getAllTodo().length)) * 100)
}

getTodoscount(){
  return this.todosCounter.next({completed: this.getCompletedTodo().length, 
                                  deleted: this.getDeletedTodo().length,
                                  favorite: this.getFavouriteTodo().length})
}

}

