import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { map, throttleTime, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-todo';
  contar = '0';

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.contador
    .pipe(
      map(x => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(x * 2)),
      throttleTime(1000),
    )
    .subscribe( value  => {
      this.contar = value;
    });
  }

}
