import { Component, inject, OnInit } from '@angular/core';
import { Model } from '../../Interface/model';
import { CartService } from '../../Services/cart.service';
import { ProductService } from '../../Services/product.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-cart',
  imports: [NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  product: Model | undefined

  cartItems: Model[] = [];
  total: number = 0;

  productService = inject(ProductService)
  cartService = inject(CartService)

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any) => {
      this.cartItems = items;
      this.total = this.cartService.calculateTotal();
    });
  }

}
