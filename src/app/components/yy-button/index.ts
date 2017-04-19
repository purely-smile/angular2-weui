import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'yy-button',
    templateUrl: './button.html'
})

export class YYbuttonComponent implements OnInit {
    @Input() public text: string = '请输入内容';
    @Input() public type: string = 'default';
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
