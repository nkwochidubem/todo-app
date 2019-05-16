import { TodoDataService } from './todo-data.service';
import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'todo-app';
  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }


  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

// Ask Angular DI system to inject the dependency
// associated with the dependency injection token 'TodoDataService'
// and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService) {
}

// Service is now available as this.todoDataService

}
