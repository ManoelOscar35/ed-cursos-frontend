import { Route } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';


export default [
    {
        path: 'products',
        component: ProductsComponent,
        data: {
            breadcrumb: 'Produtos',
            description: 'Produtos',
            userBreadcrumb: true
        }
    }
] as Route[];