import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/livestations";
  products: Producto[] | undefined;
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }
}
