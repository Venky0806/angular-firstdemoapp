import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product;

  constructor(    
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product) {
    window.alert( product.name + ' has been added to the cart!');
    this.cartService.addToCart(product);
    product.available -= 1;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }
}

