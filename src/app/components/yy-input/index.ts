import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'we-input',
    templateUrl: './input.html'
})
export class YYinputComponent {
    @Input() public set value(val) {
        this.currentValue = val;
        this.valueChange.emit(val);
    }
    public get value() {
        return this.currentValue;
    }
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();
    @Input() public title: string = '';
    @Input() public placeholder: string = '';
    @Input() public name: string;
    @Input() public readonly: boolean = false;
    @Input() public inlineDesc: string;
    @Input() public isType: string;
    @Input() public min: number;
    @Input() public max: number;
    @Input() public showClear: boolean = true;
    @Input() public equalWith: string;
    @Input() public type: string = 'text';
    @Input() public textAlign: string;
    @Input() public autocomplete: string = 'off';
    @Input() public autocapitalize: string = 'off';
    @Input() public autocorrect: string = 'off';
    @Input() public spellcheck: string = 'false';
    public currentValue: string;
}
