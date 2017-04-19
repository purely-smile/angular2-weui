import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-group',
    templateUrl: './group.html'
})

export class YYgroupComponent {
    @Input() public title: string;
}
