import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';
import { Books } from '../book';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  books: Books[] = [];
  service: any;

  constructor(private bookservice: BookService) {}
  
  ngOnInit(): void {
    this.service.getAllBooks().subscribe();
  }
  
}
