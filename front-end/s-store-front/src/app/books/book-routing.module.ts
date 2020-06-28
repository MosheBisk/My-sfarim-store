import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksComponent } from './books.component';

const bookRoutes: Routes = [
  { path: '', component:BooksComponent,
    children:[
      { path: 'list', component: BookListComponent },
      { path: 'new', component: BookEditComponent },
      { path: 'edit/:id', component: BookEditComponent },
      { path: 'edit', component: BookEditComponent },
      // { path: '', component: BookListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
