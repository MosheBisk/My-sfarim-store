import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookEditComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
