import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-grid',
    templateUrl: './grid.html'
})

export class YYgridComponent {
    @Input() public menus: any[];
}
