import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

export interface AlertConfig {
    body?: string;
    showInput?: boolean;
    title: string;
};

@Injectable()
export class ToastService {
    public addToast = new ReplaySubject();
    public alertSub = new ReplaySubject();
    public btnAlertSub = new Subject();
    public actionSheetSub = new ReplaySubject();
    public actionBtnSub = new Subject();
    public show(mes) {
        /**
         * toast
         */
        this.addToast.next(mes);
    }
    public alert(config: AlertConfig) {
        /**
         * alert
         */
        this.alertSub.next(config);
        return this.btnAlertSub;
    }
    public showActionSheet(menu: any[]) {
        /**
         * action sheet
         */
        this.actionSheetSub.next(menu);
        return this.actionBtnSub;
    }
}
