import {Component, OnInit} from '@angular/core';
import {ProductRepresentation} from "../services/api/models/product-representation";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    //this is for the get request
    /*    this.service.getAllProductsWithLimit().subscribe({
          next: (data) => {
            console.log(data);
          }
        });

     */
    const product: ProductRepresentation = {
      title: 'My Product',
      description: 'Product Description',
      price: 25,
      category: 'products category',
      image: 'https://an-image.jpg'
    }
    this.service.createProduct(product)
      .subscribe({
        next:(result)=>{
          console.log(result);
        }
      });

  }
}
