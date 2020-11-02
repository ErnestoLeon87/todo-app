import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'First todo',
        completed: true
      },
      {
        id: 2,
        title: 'Second todo',
        completed: false
      },
      {
        id: 3,
        title: 'Third todo',
        completed: false
      }
    ];
  }

}
