import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './home/dashboard.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import { StarComponent } from './shared/star-component';

/* Feature Modules */

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'products',
      component: ProductListComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'product/:id',
      component: ProductDetailComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }    
    ])
  ],
  declarations: [
    AppComponent, DashboardComponent, ProductListComponent, ProductFilterPipe, ProductDetailComponent, StarComponent
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
