import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-actionsheet',
    templateUrl: './actionsheet.html'
})

export class YYactionsheetComponent {
    @Input() public menus: any[];
    @Input() public show: boolean = false;
}
