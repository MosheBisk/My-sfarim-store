import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { Book } from "../../models/book";
import { BookService } from "../../services/book.service";
import { Category } from "../../models/category";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  
  book: Book;
  book_id: number;
  category: Category;
  formInit = false;
  success:boolean = false;
  bookForm: FormGroup;
  editMode = false;

  constructor(private bookService: BookService,
              private activatedRout: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(
      param => {
        this.book_id = Number(param.get("id"))      
        this.editMode = param.get("id") != null;
        console.log('onInit editmode = ', this.editMode);
        this.loadBookData();
      }
    );
  }
  
  loadBookData() {
    console.log('BookEditComponent ngOnInit loadBookData start');
    if (this.editMode) {
    console.log('BookEditComponent ngOnInit loadBookData this.book_id', this.book_id);
      this.bookService.listBook(this.book_id)
        .subscribe(
          book_data =>{
            console.log('BookEditComponent ngOnInit loadBookData book_data = ', book_data);
            this.book = book_data;
            console.log('BookEditComponent ngOnInit this.book = ', this.book);
            // if(!this.formInit){
              this.initForm('bookD');
            // }
          }
        ) 
    }
    // else{
      this.bookService.listCategorys()
        .subscribe(
          category_data =>{
            this.category = category_data;
            console.log('BookEditComponent this.category - ', this.category);
            
            if(!this.editMode){
              this.initForm('catgory');
            }
          }
        )
    // }
    console.log('BookEditComponent ngOnInit loadBookData end');
  }

  private initForm(txt: string){
    console.log('BookEditComponent initForm start', txt);
    this.formInit = true;
    let bName = '';
    let bAuther = '';
    let bCategory: number;
    let bDescription = '';
    let bUPC;
    let bPrice;
    let bPublisher = '';

    if (this.editMode) {
      console.log('init form book_id == V, this.book - ', this.book);
      
      bName = this.book.name;
      bAuther = this.book.auther;
      bCategory = this.book.category;
      bDescription = this.book.book_description;
      bUPC = this.book.universal_product_code;
      bPrice = this.book.price;
      bPublisher = this.book.publisher;
    }
    
    this.bookForm = new FormGroup({
      name: new FormControl(bName, Validators.required),
      auther: new FormControl(bAuther, Validators.required),
      category: new FormControl(bCategory, Validators.required),
      book_description: new FormControl(bDescription, Validators.required),
      universal_product_code: new FormControl(bUPC, Validators.required),
      price: new FormControl(bPrice, Validators.required),
      publisher: new FormControl(bPublisher, Validators.required)
    });
  }

  onSubmit(){
    console.log('onSubmit()');
    if (this.editMode) {
      this.updateBookDetailes();
      setTimeout(() => {
        this.onCancel()
      }, 1500);
    }
    else{
      this.addNewBook();
      setTimeout(() => {
        this.onCancel()
      }, 1500);
    }
  }

  updateBookDetailes(){
    console.log('updateBookDetailes this.bookForm.value - ', this.bookForm.value);
    this.bookService.updateBookD(this.book_id, this.bookForm.value)
      .subscribe(
        res =>{
          console.log('Book ', res, ' updated');
          this.success = true;
        }
      )
  }

  addNewBook(){
    console.log('this.bookForm.value - ', this.bookForm.value);
    this.bookService.addBook(this.bookForm.value)
    .subscribe(
      res =>{
        console.log('New book ', res, ' added');
        this.success = true;
      },
      error => console.log("Sorry, couldn't save book! ", error)
    )
  }

  onCancel(){
    this.router.navigate(['/books/list'])
  }
}
