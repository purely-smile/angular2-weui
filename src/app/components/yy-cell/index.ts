import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-cell',
    templateUrl: './cell.html'
})

export class YYcellComponent {
    @Input() public title: string;
    @Input() public value: string;
    @Input() public isLink: boolean = false;
}
