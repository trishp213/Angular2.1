import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pm-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent  {
    @Input() rating: number;
    starWidth: number;
}
