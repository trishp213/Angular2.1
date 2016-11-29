import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

@NgModule({
    exports: [ StarComponent ],
    declarations: [ StarComponent ]
})
export class SharedModule { }