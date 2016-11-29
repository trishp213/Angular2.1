import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forChild([
        {
        path: 'products',
        component: ProductListComponent
        },
        {
        path: 'product/:id',
        component: ProductDetailComponent
        }
        ]),
        SharedModule],
    exports: [ ProductListComponent, ProductDetailComponent, ProductFilterPipe ],
    declarations: [ ProductListComponent, ProductFilterPipe, ProductDetailComponent ],
    providers: [ ProductService ],
})
export class ProductModule{

}