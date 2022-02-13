import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get("http://localhost:3100/api/book/getAllBooks")
    .pipe(map((res: any)=> res));
  }
}
