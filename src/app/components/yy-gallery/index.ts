import { Component, Input } from '@angular/core';

@Component({
    selector: 'yy-gallery',
    templateUrl: './gallery.html'
})

export class YYgalleryComponent {
    @Input() public delText: string = '删除';
}
