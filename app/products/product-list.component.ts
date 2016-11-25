import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService} from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],    
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    listFilter: string = "cart";
    products: IProduct[];

    ngOnInit(){        
        this.products = this._productService.getProducts();
    }

    constructor (private _productService: ProductService){

    }
}