import { Component } from '@angular/core';


@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1>
                <a routerLink="/products">Products</a>
                 <router-outlet></router-outlet>
                </div>`    
})
export class AppComponent { 
    pageTitle: string = "Acme Product Management"
}
