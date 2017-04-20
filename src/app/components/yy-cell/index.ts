import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-cell',
    templateUrl: './cell.html'
})

export class YYcellComponent {
    @Input() public title: string;
    @Input() public value: string;
    @Input() public isLink: boolean = false;
}
