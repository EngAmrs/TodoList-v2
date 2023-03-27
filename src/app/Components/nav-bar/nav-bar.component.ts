import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { TodoService } from '../../Services/todo.service';
import { UserDataService } from "../../Services/user-data.service"
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  firstname: string = "";
  percentage: string = ""
  image: string = ""
  todosCounter = {
          completed : 0,
          deleted: 0, 
          favorite: 0 
  }
  
 
  constructor(private auth: AuthGuard,private user: UserDataService, private todo: TodoService, private _router: Router  ){
    
    this.todo.todosCounter$.subscribe((res) => {
    
      if(!res)
        res = {
          completed : 0,
          deleted: 0, 
          favorite: 0 
        }
      
      
        this.todosCounter.completed = res.completed;
        this.todosCounter.deleted = res.deleted; 
        this.todosCounter.favorite = res.favorite; 

      
      })

    this.getfirstName(this.user.currentUser);
    this.getImage(this.user.currentUser);
    this.todo.percentage$.subscribe((res) => {
    
    if(isNaN(res))
      res = 0;

    this.percentage = res.toFixed(2).toString() + "%";
    })
    
  }

  getfirstName(id:number){
    let user = this.user.usersData.find((user)=> user.userId === id)
    if(!user) return

    this.firstname = user.firstname
  }
  getImage(id:number){
    let user = this.user.usersData.find((user)=> user.userId === id)
    if(!user) return

    this.image = user.image
  }

  logOut(){
    this.auth.isLogged = false;
    this._router.navigate(['/'])
  }

}
