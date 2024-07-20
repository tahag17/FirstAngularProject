import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  private baseUrl: string = 'https://fakestoreapi.com/';

  getAllProductsWithLimit(limit: number = 5): Observable<Array<ProductRepresentation>> {
    const ProductsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(ProductsUrl);
  }

  createProduct(product: ProductRepresentation):Observable<ProductRepresentation>{
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }

}
