import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'we-button',
    templateUrl: './button.html'
})

export class YYbuttonComponent implements OnInit {
    /**
     * @type primary default warn
     */
    @Input() public type: string = 'primary';
    @Input() public disable: boolean = false;
    @Input() public mini: boolean = false;
    @Input() public plain: boolean = false;
    public classText = '';
    public ngOnInit() {
        let { type, disable, mini, plain } = this;
        this.classText = `weui-btn weui-btn_${type} ${disable ?
            'weui-btn_disabled' : ''} ${mini ? 'weui-btn_mini' :
                ''} ${plain ? 'weui-btn_plain-' + type : ''}`;
    }
};
