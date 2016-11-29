import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { ProductModule } from './products/product.module';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './home/dashboard.component';



/* Feature Modules */

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule,
    ProductModule,
    RouterModule.forRoot([
    {
      path: 'dashboard',
      component: DashboardComponent
    },    
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }    
    ])
  ],
  declarations: [
    AppComponent, DashboardComponent, 
    //StarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
