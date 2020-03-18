import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor( private route: ActivatedRoute, private cartService: CartService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}