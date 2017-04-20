import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-radio',
    templateUrl: './radio.html'
})
export class YYradioComponent {
    @Input() public title: string;
}
