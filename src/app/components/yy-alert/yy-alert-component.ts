import { Component, Input, OnInit } from '@angular/core';
import { ToastService, AlertConfig } from '../../services';
@Component({
  selector: 'we-alert',
  templateUrl: './yy-alert.html',
  styleUrls: ['./yy-alert.scss']
})
export class YYAlertComponent implements OnInit {
  public title: string;
  public body: string;
  public confirmText: string = '确认';
  public cancelText: string = '取消';
  public showAlert: boolean = false;
  constructor(
    private toast: ToastService
  ) { }
  public ngOnInit() {
    this.toast.alertSub
      .do((config: AlertConfig) => {
        let { title, body } = config;
        this.body = body;
        this.title = title;
        this.showAlert = true;
      })
      .subscribe();
  }
  public btnActive(action: string) {
    /**
     * 按钮点击事件
     */
    this.showAlert = false;
    switch (action) {
      case 'yes':
        this.toast.btnAlertSub.next(1);
        break;
      case 'no':
        this.toast.btnAlertSub.error(0);
        break;
      default:
        break;
    }
  }
}
