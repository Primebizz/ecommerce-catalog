import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },

    {
        path: 'products',
        component: ProductListComponent
    },

    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },

    {
        path: 'cart',
        component: CartComponent
    }
];
