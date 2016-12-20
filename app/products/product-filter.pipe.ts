import { PipeTransform, Pipe } from '@angular/core';
import {IProduct} from './product'

@Pipe({
    name: 'productFilter' 
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string): IProduct[]{
        // to lower case
        let filter: string = args ? args.toLocaleLowerCase() : null;

        if(!filter) return value;

        // built in array filter method, ES15 arrow syntax
        var result =  value.filter((product: IProduct) => {
            var include = product.productName.toLocaleLowerCase().indexOf(filter) != -1;
            return include;
        });

           return result;
    }
}
