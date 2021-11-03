import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";

import { Product } from "./../product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  productsAPI!: any;

  product: Product = {
    id: 0,
    title: "",
    price: 0,
  };

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ProductService.readById(id!).subscribe((product: any) => {
      this.productsAPI = product;
    });
  }

  updateProduct(title: string, price: number, id: number): void {
    debugger;

    this.product.id = id;
    this.product.title = title;
    this.product.price = Number(price);

    this.ProductService.update(this.product).subscribe((data: any) => {
      this.ProductService.showMessage("Produto alterado !");

      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
