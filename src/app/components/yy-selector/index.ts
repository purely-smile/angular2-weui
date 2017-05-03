import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'we-select',
    templateUrl: './selector.html'
})

export class YYselectorComponent {
    @Input() public title: string;
    @Input() public options: any[];
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();
    public currentValue = 0;
    @Input() public set value(val) {
        this.currentValue = val;
        this.valueChange.emit(val);
    }
    public get value() {
        return this.currentValue;
    };
}
