import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';

/* Feature Modules */

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule    
  ],
  declarations: [
    AppComponent,ProductListComponent, ProductFilterPipe
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
