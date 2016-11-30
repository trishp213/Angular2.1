import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }  from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent  implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: any;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _location: Location,
        private _router: Router
        ) {}

    ngOnInit() : void {      
        this._route.params  
        .switchMap((params: Params) => this._productService.getProduct(+params['id']))
        .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack() : void {
        this._router.navigate(['/products']);
    }

}
