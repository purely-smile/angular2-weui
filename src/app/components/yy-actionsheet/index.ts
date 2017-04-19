import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-actionsheet',
    templateUrl: './actionsheet.html'
})

export class YYactionsheetComponent {
    @Input() public menus: any[];
    @Input() public show: boolean = false;
}
