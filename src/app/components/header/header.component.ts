import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-nav',
    templateUrl: './header.html'
})
export class HeaderNavComponent {
    @Input() public title: string;
    @Input() public left: any;
    @Input() public right: any;
    @Input() public showSearch: boolean;
}
