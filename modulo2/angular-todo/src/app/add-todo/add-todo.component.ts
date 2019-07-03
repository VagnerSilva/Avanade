import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/types/Todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  email = '';

  todo: Todo = {
    id: null,
    title: '',
    date: '',
    description: '',
    finished: false
  };

  constructor(
    private todoService: TodoService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  add() {
    this.todoService.addTodo(this.todo)
    .subscribe(() => {
      alert('Todo enviado com sucesso!');
      this.router.navigateByUrl('/todos');
    });
  }

}
