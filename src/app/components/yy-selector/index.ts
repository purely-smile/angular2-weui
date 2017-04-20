import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-selector',
    templateUrl: './selector.html'
})

export class YYselectorComponent {
    @Input() public title: string;
    @Input() public options: any[];
}
