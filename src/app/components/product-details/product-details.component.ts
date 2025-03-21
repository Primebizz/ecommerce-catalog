import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../../Interface/model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product: Model | undefined

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsServices.getProductById(id).subscribe((product) => {
      this.product = product;
    })
    console.log(id);
    console.log('Product from service' , this.product);
  }

  productsServices = inject(ProductService);

  route = inject(ActivatedRoute)

  // getProductsDetails(){
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productsServices.getProductById(id).subscribe((product) => {
  //     this.product = product;
  //   })
  // }

}
