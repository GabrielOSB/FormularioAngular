import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    title: '',
    price: 0.0,
  }

  constructor(private ProductService: ProductService, private router: Router) {

   }

  ngOnInit(): void {
  }

  createProduct(): void {
    
    this.ProductService.create(this.product).subscribe((data: any) => {
      this.ProductService.showMessage('Product Created !')

      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
