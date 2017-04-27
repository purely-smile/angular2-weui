import { Directive, HostListener } from '@angular/core';
/**
 * 阻止事件冒泡
 */
@Directive({
    selector: '[stop-propagation]'
})
export class ClickStopPropagationDirective {
    @HostListener('click', ['$event'])
    public onclick(event: MouseEvent): void {
        event.stopPropagation();
    }
}
