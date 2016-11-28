import { Component } from '@angular/core';


@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1>
                        <nav>
                <a routerLink="/dashboard">Dashboard</a>
                <a routerLink="/products">Products</a>
            </nav>
            <router-outlet></router-outlet>
                </div>`    
})
export class AppComponent { 
    pageTitle: string = "Acme Product Management"
}
