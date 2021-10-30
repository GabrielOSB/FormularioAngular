import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  productsAPI!: any[];
  displayedColumns = ['name', 'price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductAPI().subscribe((data: any) => {
      debugger;
      this.productsAPI = data.products;
      // this.products = result;
      console.log(data)
    })
  }

}
