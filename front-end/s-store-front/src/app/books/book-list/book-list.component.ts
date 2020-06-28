import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from "../../models/book";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { console.log('BookListComponent ctor');
   }

  ngOnInit(): void {
    console.log('BookListComponent onInit');
    this.listOfBooks();
  }

  listOfBooks() {
    this.bookService.listAllBooks()
      .subscribe(
        data => {this.books$ = data
        console.log('BookListComponent listOfBooks = ', this.books$);}
      );
    console.log('BookListComponent listOfBooks = ', this.books$);
    
  }

}
