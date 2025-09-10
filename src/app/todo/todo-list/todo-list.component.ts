import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos : Todo[] = []
  filtered = this.todos
  constructor(private readonly todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  showComplete : boolean = false

  loadTodos(){
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
      this.filtered = this.showComplete ? this.todos : this.todos.filter((t) => t.completed === false)
    })
  }

  toggleShowCompleted() {
    
    //this.filtered = this.showComplete ? this.todos : this.todos.filter((t) => t.completed === false)
    this.loadTodos()
    console.log(this.filtered);
    
    this.showComplete = !this.showComplete
  }

 
  getIncomplete(){
    this.todos = this.todos.filter((t) => t.completed === false)
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(() => {
      this.loadTodos()
    });
  }

  newTodo(title: string) {
    this.todoService.addTodo(title).subscribe(() => {
      this.loadTodos()
    });
  }
}
