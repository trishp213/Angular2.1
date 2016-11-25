import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe
  ],
    providers: [
    ProductService,
  ]

})
export class ProductModule {}
