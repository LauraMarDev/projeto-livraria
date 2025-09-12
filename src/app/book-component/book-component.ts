import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { FormGroup, FormBuilder} from '@angular/forms';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-component',
  standalone: false,
  templateUrl: './book-component.html',
  styleUrl: './book-component.css'
})
export class BookComponent implements OnInit{

  books: Books[]=[];
  formGroupBooks: FormGroup;

  constructor (private formBuilder: FormBuilder, private service: BookService) {
    this.formGroupBooks = formBuilder.group({
      id: [''],
      title: [''],
      author: [''],
      year: [''],
      gender:[''],
      publisher:['']
    })
  }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe();
  }

  save() {
    this.books.push(this.formGroupBooks.value);
    this.formGroupBooks.reset();
  }
}