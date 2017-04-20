import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-checkbox',
    templateUrl: './checkbox.html'
})
export class YYcheckboxComponent {
    @Input() public title: string;
}
