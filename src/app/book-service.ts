import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Books[]>{
    return this.http.get<Books[]>(this.apiUrl);
  }

  save(books: Books): Observable<Books>{
    return this.http.post<Books>(this.apiUrl, books);
  }
}
