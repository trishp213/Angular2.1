import { PipeTransform, Pipe } from '@angular/core';
import {IProduct} from './product'

@Pipe({
    name: 'productFilter' 
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct[]{
        // to lower case
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;

        // built in array filter method, ES15 arrow syntax
        return filter ? value.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filter) != -1): value;
    }
}
