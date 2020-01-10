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
  // movies: any = (data as any).default;
  productUrl: string = "https://api.myjson.com/bins/zcrhi";



  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl);
  }
  getMovie(id: number): Observable<any> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
