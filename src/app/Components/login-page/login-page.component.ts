import { Component } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { Router } from '@angular/router';
import { UserDataService } from "../../Services/user-data.service"
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  //UserData
    firstName :string = ""
    username: string = ""
    password: string = ""
    isCorrect: boolean = false
  constructor( private auth: AuthGuard, private _router:Router, private user: UserDataService) {
    if(this.auth.isLogged)
      this._router.navigate(['/todos'])
  }
  
  findUser(user: string){
    return this.user.usersData.find(u => user === u.username) 

    // if(!curUser) return 

    // if(this.password !== curUser.password) return false

    // return true


  }
  loginAction(){
    let curUser = this.findUser(this.username)
    if(!curUser) return
    
    if(curUser.password === this.password){
      this.user.currentUser = curUser.userId;
      this.auth.isLogged = true;
      if(this.auth.isLogged)
        this._router.navigate(['/todos'])

      this.firstName = curUser.firstname
      

    }
  }

  onSubmit(Form: NgForm) {
    this.loginAction()
    if(!this.auth.isLogged && !this.isCorrect)
      this.isCorrect = true

  }


}
