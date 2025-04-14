import { Component, inject, OnChanges, OnInit, signal } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../../Interface/model';
import { CartService } from '../../Services/cart.service';
import { CartComponent } from "../cart/cart.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-product-details',
  imports: [CartComponent, NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product: Model | undefined;
  cartItems: Model[] = [];
  total = signal(1);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsServices.getProductById(id).subscribe((product) => {
      this.product = product;
    })
    console.log(id);
    console.log('Product from service' , this.product);
    this.addTotal()
  }

  productsServices = inject(ProductService);
  cartService = inject(CartService)
  router = inject(Router)

  route = inject(ActivatedRoute)

  addToCart(){
    if(this.product){
      this.cartService.addToCart(this.product);
      // this.router.navigateByUrl('/cart')
      this.addTotal()
    }

    }
    
  

  // getProductsDetails(){
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productsServices.getProductById(id).subscribe((product) => {
  //     this.product = product;
  //   })
  // }

  
  
  addTotal(){
    const totalItems: number = this.cartService.calculateTotal();
     this.total.update((value) => value + totalItems);
    }



}
