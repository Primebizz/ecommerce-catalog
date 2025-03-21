import { Model } from './../Interface/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    this.fetchProducts()
   };

  private productsSubject = new BehaviorSubject<Model[]>([]);
  products$ = this.productsSubject.asObservable();

  fetchProducts() {
    this.http.get<Model[]>(Environment.API_URL).subscribe((products) => {
      this.productsSubject.next(products);
    });
  }

  getproduct(): Observable<Model>{
    return this.http.get<Model>(Environment.API_URL);
}

  getProductById(id: number): Observable<Model | undefined> {
    console.log('getProductById called with ID:', id);

    return this.products$.pipe(
      map((products) => {
        console.log('Products in map:', products); 

        const foundProduct = products.find((product) => product.id === id);
        console.log('Found product:', foundProduct); 

        return foundProduct;
      })
    )
      }
    
  }

