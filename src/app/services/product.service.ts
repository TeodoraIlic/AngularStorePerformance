import { Injectable } from '@angular/core';
import * as data from '../../assets/movies.json';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//httpClient returns observalbe so we need to import it
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  movies: any = (data as any).default;

  constructor() { }

  getAllMovies() {
    return [...this.movies]
  }
  getMovie(id: number) {
    return {
      ...this.movies.find(movie => {
        return movie.id === id;
      })
    }
  }
}
