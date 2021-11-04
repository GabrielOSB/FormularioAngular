import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
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
    return this.http.post(this.baseUrlAPI, product, { headers: this.headers });
  }

  readById(id: string) {
    return this.http.post(this.baseUrlAPI + "/idproduct/" + Number(id), {
      headers: new HttpHeaders({ APIKEY: "ACBY5j8EvKkmTeUCup6AOAm2" }),
    });
  }

  update(product: Product) {
    return this.http.put(this.baseUrlAPI, product, { headers: this.headers });
  }

  delete(id: number) {
    return this.http.delete(this.baseUrlAPI + "/delete/" + id);
  }
}
