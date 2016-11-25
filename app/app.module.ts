import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { ProductModule } from './products/product.module';
//import { ProductListComponent } from './products/product-list.component';
//import { ProductFilterPipe } from './products/product-filter.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ProductModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
