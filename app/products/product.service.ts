import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductService{
    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]>{
        return this._http.get('api/products.json')
        .map((response: Response) => <IProduct[]>response.json())
        .catch(this.handleError)
    }

   getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}