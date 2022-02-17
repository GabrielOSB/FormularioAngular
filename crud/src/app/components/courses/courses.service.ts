import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { courses } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  baseUrlAPI = "http://localhost:55863/Product/v1/api";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ APIKEY: "ACBY5j8EvKkmTeUCup6AOAm2" });
  }

  getcoursesAPI() {
    return this.http.get(this.baseUrlAPI, { headers: this.headers });
  }
}
