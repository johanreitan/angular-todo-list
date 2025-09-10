import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://boolean-uk-api-server.fly.dev'
  private username = 'johan';
  private getTodos = `${this.apiUrl}/${this.username}/todo`

  constructor(private http: HttpClient) {}


  getAll() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/${this.username}/todo`)
  }

  todos = this.getAll();


  addTodo(title: string) : Observable<Todo> {
    // TODO: replace with a POST request
    const body = { 
      title: title,
     }
    return this.http.post<Todo>(`${this.apiUrl}/${this.username}/todo`, body);
  }

  updateTodo(updatedTodo: Todo): Observable<Todo> {
    // TODO: replace with a PUT request
    return this.http.put<Todo>(`${this.apiUrl}/${this.username}/todo/${updatedTodo.id}`, updatedTodo);
  }
    
}
