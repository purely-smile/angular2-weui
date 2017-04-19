import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-radio',
    templateUrl: './radio.html'
})
export class YYradioComponent {
    @Input() public title: string;
}
