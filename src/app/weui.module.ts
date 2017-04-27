import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    FooterNavComponent,
    HeaderNavComponent,
    YYbuttonComponent,
    YYtextareaComponent,
    YYinputComponent,
    YYswitchComponent,
    YYradioComponent,
    YYcheckboxComponent,
    YYselectorComponent,
    YYgroupComponent,
    YYactionsheetComponent,
    YYcellComponent,
    YYuploaderComponent,
    YYgalleryComponent,
    YYgridComponent,
    YYpreviewComponent,
    YYToastWrapComponent,
    YYAlertComponent,
    WeActionSheetComponent
} from './components';

import { ClickStopPropagationDirective } from './directives';

import {
    ToastService
} from './services';

const allComponent = [
    ClickStopPropagationDirective,
    WeActionSheetComponent,
    FooterNavComponent,
    HeaderNavComponent,
    YYbuttonComponent,
    YYtextareaComponent,
    YYinputComponent,
    YYswitchComponent,
    YYradioComponent,
    YYcheckboxComponent,
    YYselectorComponent,
    YYgroupComponent,
    YYactionsheetComponent,
    YYcellComponent,
    YYuploaderComponent,
    YYgalleryComponent,
    YYgridComponent,
    YYpreviewComponent,
    YYToastWrapComponent,
    YYAlertComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: allComponent,
    providers: [
        ToastService
    ],
    declarations: allComponent
})
export class WeuiModule { };
