import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor( private http: HttpClient ) { }

  getItems() {
    return this.items;
  }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(product, productId) {
    // remove item from cart
    this.items.splice(productId, 1);
    window.alert("Removed from cart ");
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getCartSize() {
    return this.items.length;
  }

}