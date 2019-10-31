import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onAddToCart() {
    window.alert('Product is added to cart');
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }
}

