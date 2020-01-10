import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from 'src/app/services/product.service.js';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  movies: any[];
  constructor(
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllMovies().subscribe(products => {
      this.movies = products;
    })
  }

}
