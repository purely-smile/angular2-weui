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
    public show(mes) {
        this.addToast.next(mes);
    }
    public alert(config: AlertConfig) {
        this.alertSub.next(config);
        return this.btnAlertSub;
    }
}
