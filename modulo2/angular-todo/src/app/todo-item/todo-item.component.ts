import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../types/Todo'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() itens: Array<Todo> = [];
  constructor() { }

  ngOnInit() {
  }

}
