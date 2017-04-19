import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-grid',
    templateUrl: './grid.html'
})

export class YYgridComponent {
    @Input() public menus: any[];
}
