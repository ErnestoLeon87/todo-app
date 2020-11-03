import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      todo: true,
      'is-completed': this.todo.completed
    };
  }

  onToggleCompleted(todo): void {
    todo.completed = !todo.completed;
  }

}
