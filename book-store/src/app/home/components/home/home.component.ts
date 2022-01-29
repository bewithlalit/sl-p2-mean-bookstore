import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: BookModel[];

  ngOnInit(): void {
    this.books = [];
    // const instanceOfBookService = new BookService();
    const bookObservable = this.bookService.getBooks();
    bookObservable.subscribe(
        (result)=>{this.books=result;},
        (err)=>{console.log(err)},
        ()=>{console.log("done")}
    )
  }

}
