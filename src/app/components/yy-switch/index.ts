import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-switch',
    templateUrl: './switch.html'
})
export class YYswitchComponent {
    @Input() public title: string;
    @Input() public disabled: boolean = false;
    @Input() public value: string;
}
