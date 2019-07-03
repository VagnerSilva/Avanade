import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/types/Todo';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.scss']
})
export class ListaTodosComponent implements OnInit {
  todos: Array<Todo> = [];
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(value => {
      this.todos = value;
    })
  }

}
