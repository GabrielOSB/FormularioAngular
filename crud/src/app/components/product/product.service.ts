import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";
  baseUrlAPI = "http://localhost:55863/Product/v1/api";
  private headers: HttpHeaders;

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {
    this.headers = new HttpHeaders({ APIKEY: "ACBY5j8EvKkmTeUCup6AOAm2" });
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  getProductAPI() {
    return this.http.get(this.baseUrlAPI, { headers: this.headers });
  }

  create(product: Product) {
    return this.http.post(this.baseUrlAPI, product, { headers: this.headers});
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrlAPI}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
