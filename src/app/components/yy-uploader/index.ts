import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-uploader',
    templateUrl: './uploader.html'
})

export class YYuploaderComponent {
    @Input() public title: string;
}
