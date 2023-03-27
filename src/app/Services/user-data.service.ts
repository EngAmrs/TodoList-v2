import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../Interfaces/user';




@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  usersData: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  currentUser : number = 0
  dummyData : object[] = []
constructor(private _http: HttpClient) {

  //Test requests
  this._http.get<any>("https://dummyjson.com/users").subscribe(res => {
    this.dummyData = res.users;
    console.log(this.dummyData);
  })
  }

    addDataToLocal(){ 
      localStorage.setItem("users", JSON.stringify(this.usersData));
    }
  

}

