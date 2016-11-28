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
    listFilter: string = "";
    products: IProduct[];
    errorMessage: any;

    ngOnInit(){        
        this._productService.getProducts()
        .subscribe(
            products => this.products = products, 
            error => this.errorMessage = <any>error);
    }

    constructor (private _productService: ProductService){

    }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}