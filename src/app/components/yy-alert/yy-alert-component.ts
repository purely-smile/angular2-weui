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
  public showInput: boolean = false;
  public text: string;
  constructor(
    private toast: ToastService
  ) { }
  public ngOnInit() {
    this.toast.alertSub
      .do((config: AlertConfig) => {
        let { title, body, showInput } = config;
        this.body = body;
        this.title = title;
        this.showInput = showInput;
        this.showAlert = true;
      })
      .subscribe();
  }
  public btnActive(action: string) {
    /**
     * 按钮点击事件
     */
    this.showAlert = false;
    let { text } = this;
    switch (action) {
      case 'yes':
        this.toast.btnAlertSub.next(text);
        break;
      case 'no':
        this.toast.btnAlertSub.error(0);
        break;
      default:
        break;
    }
  }
}
