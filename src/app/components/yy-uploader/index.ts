import { Component, Input } from '@angular/core';

@Component({
    selector: 'we-uploader',
    templateUrl: './uploader.html'
})

export class YYuploaderComponent {
    @Input() public title: string;
}
