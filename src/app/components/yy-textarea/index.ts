import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'yy-textarea',
    templateUrl: './yy-textarea.html',
})

export class YYtextareaComponent implements OnInit {
    @Input() public showCounter: boolean = true;
    @Input() public max: number = 10;
    @Input() public value: string = '';
    @Input() public name: string;
    @Input() public placeholder: string = '请输入文本';
    @Input() public row: number = 3;
    @Input() public cols: number = 30;
    @Input() public height: number = 40;

    @Input() public autocomplete: string = 'off';
    @Input() public autocapitalize: string = 'off';
    @Input() public autocorrect: string = 'off';
    @Input() public spellcheck: string = 'flase';
    public textLength = 0;
    public ngOnInit() {
        console.log(this);
    }
}
