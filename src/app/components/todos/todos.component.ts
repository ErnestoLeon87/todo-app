import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((todos) => (this.todos = todos));
  }

  deleteTodo(todo: Todo): void {
    // Delete todo from the UI
    this.todos = this.todos.filter((t) => t.id !== todo.id);

    // Remove form server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    // Add the new todo to th UI
    this.todoService.saveTodo(todo).subscribe((newTodo) => {
      this.todos.push(newTodo);
    });

    //
  }
}
