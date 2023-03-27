import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../Services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{
  newAcc: FormGroup;
  isExist: boolean = false;
  isUsed: boolean = false
  constructor( private usersSer: UserDataService, private _router: Router) {
    
    this.newAcc = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      re_password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })

  }

  ngOnInit(): void {

  }

  findUserByEmail(email:string){
    return this.usersSer.usersData.find(u => u.email === email);
  }
  findUserByUsername(username:string){
    return this.usersSer.usersData.find(u => u.username === username);
  }

  createRandomId(){
    return Math.floor(Math.random() * 1000 * 1000) + Number(new Date());
  }

  submit() {
    if(this.findUserByEmail(this.newAcc.value.email))
      this.isExist = true;
    else if(this.findUserByUsername(this.newAcc.value.username))
        this.isUsed = true;

    else{
      this.newAcc.value.userId = this.createRandomId();
      this.newAcc.value.image = "../../../assets/pngwing.com.png";
      this.usersSer.usersData.push(this.newAcc.value);
      this.usersSer.addDataToLocal();
      this._router.navigate(['/login']);
    }

  }

 

}