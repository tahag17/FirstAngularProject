import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }


}
