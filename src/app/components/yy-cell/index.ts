import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'we-cell',
    templateUrl: './cell.html'
})

export class YYcellComponent {
    @Input() public title: string;
    @Input() public value: string;
    @Input() public isLink: boolean = false;
    @Input() public link: string;
    constructor(
        private router: Router
    ) { }
    public linkTo() {
        let { link } = this;
        if (!link) {
            return;
        }
        this.router.navigateByUrl(link);
    }
}
