import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe
  ]
})
export class ProductModule {}
