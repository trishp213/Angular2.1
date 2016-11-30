import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star.component';

@NgModule({
    exports: [ StarComponent, FormsModule, CommonModule ],
    declarations: [ StarComponent ]
})
export class SharedModule{}