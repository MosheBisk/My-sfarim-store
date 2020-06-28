import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: 'books', pathMatch: 'full' },
  // { path: 'books', component: BooksComponent },
  // { path: '', component:AppComponent},
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
