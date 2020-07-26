import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Book } from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private endpoint = 'http://localhost:8030/api/';

  constructor(private http:HttpClient) { }
  
  // list all books
  listAllBooks():Observable<any>{
    return this.http.get(this.endpoint + 'books/')
  }

  // GET one book
  listBook(id: number): Observable<any>{
    return this.http.get(this.endpoint + 'books/' + id)
  }

  // POST - add a new book
  addBook(book: Book): Observable<object>{
    return this.http.post(this.endpoint + 'books/', book)
  }

  // PATCH - update one book's details
  updateBookD(id: number, book: any): Observable<any>{
    return this.http.patch(this.endpoint + 'books/' + id, book)
  }
  
  // DELETE - one book
  deleteOneBook(id: number): Observable<any>{
    return this.http.delete(this.endpoint + 'books/' + id)
  }
  
  // list all categories
  listCategorys(): Observable<any>{
    return this.http.get(this.endpoint + 'categories/')
  }
}
