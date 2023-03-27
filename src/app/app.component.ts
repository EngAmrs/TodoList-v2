import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthGuard, private _http : HttpClient){
    this._http.get('https://dummyjson.com/users').subscribe(res=>{
      console.log(res);
    })
   
  }

isLoged(){
  return this.auth.isLogged;
}

  title = 'myApp';
}
