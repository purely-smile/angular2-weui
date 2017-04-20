import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-group',
    templateUrl: './group.html'
})

export class YYgroupComponent {
    @Input() public title: string;
}
