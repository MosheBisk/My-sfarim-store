import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// import { BooksComponent } from './books/books.component';
// import { BookListComponent } from './books/book-list/book-list.component';
// import { BookEditComponent } from './books/book-edit/book-edit.component';
// import { BookItemComponent } from './books/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    // BooksComponent,
    // BookListComponent,
    // BookEditComponent,
    // BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
