import { Component, Input } from '@angular/core';

@Component({
    selector: 'footer-nav',
    templateUrl: './footer-nav.html'
})
export class FooterNavComponent {
    @Input() public navs: any;
    constructor() {
        console.log(this);
    }
}
