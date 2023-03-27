import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TodoComponent } from './Components/todo/todo.component';
import { DeletedTodosComponent } from './Components/deleted-todos/deleted-todos.component';
import { CompeletedTodosComponent } from './Components/compeleted-todos/compeleted-todos.component';
import { FavouriteTodosComponent } from './Components/favourite-todos/favourite-todos.component';
import { RegisterComponent } from './Components/register/register.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoginPageComponent,
    NotFoundComponent,
    NavBarComponent,
    FooterComponent,
    TodoComponent,
    DeletedTodosComponent,
    CompeletedTodosComponent,
    FavouriteTodosComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
