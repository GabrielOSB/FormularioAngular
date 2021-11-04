import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  productsAPI: any;

  product: Product = {
    id: 0,
    title: "",
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id!).subscribe((IdProduct) => {
      this.productsAPI = IdProduct;
    });
  }

  deleteProduct(title: string, price: number, id: number): void {

    debugger;

    this.product.id = id;
    this.product.title = title;
    this.product.price = Number(price);

    this.productService.delete(this.product).subscribe((data: any) => {
      this.productService.showMessage("Produto Excluido !");
      
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
