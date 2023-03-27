import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CompeletedTodosComponent } from './Components/compeleted-todos/compeleted-todos.component';
import { DeletedTodosComponent } from './Components/deleted-todos/deleted-todos.component';
import { FavouriteTodosComponent } from './Components/favourite-todos/favourite-todos.component';
import {LoginPageComponent} from './Components/login-page/login-page.component'
import {NotFoundComponent} from './Components/not-found/not-found.component'
import { RegisterComponent } from './Components/register/register.component';
import {TodoListComponent} from './Components/todo-list/todo-list.component';
const routes: Routes = [
  {path:'' , component:LoginPageComponent} ,
  {path:'login' , component:LoginPageComponent} ,
  {path:'register' , component:RegisterComponent} ,
  {path:'todos' , component:TodoListComponent, canActivate:[AuthGuard]},
  {path:'completed', component:CompeletedTodosComponent, canActivate:[AuthGuard]},
  {path:'deleted', component:DeletedTodosComponent, canActivate:[AuthGuard]},
  {path:'favourite', component:FavouriteTodosComponent, canActivate:[AuthGuard]},
  {path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
