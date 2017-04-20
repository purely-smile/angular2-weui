import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../services';
@Component({
  selector: 'we-toast-wrap',
  templateUrl: './yy-toast-wrap.html',
  styleUrls: ['./yy-toast-wrap.scss']
})
export class YYToastWrapComponent implements OnInit {
  public text: string = '测试';
  public showToast: boolean = false;
  constructor(
    private toast: ToastService
  ) { }
  public ngOnInit() {
    this.toast.addToast
      .do((text: any) => {
        this.text = text;
        this.showToast = true;
      })
      .delay(2000)
      .subscribe(() => {
        this.showToast = false;
      });
  }
}
