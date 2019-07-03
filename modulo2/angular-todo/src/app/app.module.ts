import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';
import { TodoFormComponent } from './todo-form/todo-form.component';


const routers: Routes =  [
  { path: '', component: HomeComponent},
  { path: 'cep/:numero', component: CepComponent},
  { path: 'todos', component: ListaTodosComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorBotoesComponent,
    TodoItemComponent,
    ListaTodosComponent,
    HomeComponent,
    CepComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
