import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
})
export class ProductListComponent{
    pageTitle: string = "Product List";
    products: any[];
}