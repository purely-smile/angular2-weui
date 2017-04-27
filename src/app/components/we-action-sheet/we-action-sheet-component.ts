import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../services';

@Component({
  selector: 'we-action-sheet',
  templateUrl: './we-action-sheet.html',
  styleUrls: ['./we-action-sheet.scss']
})
export class WeActionSheetComponent implements OnInit {
  public list: any[] = [];
  public showSheet: boolean = false;
  constructor(
    private ToastService: ToastService
  ) { }
  public ngOnInit() {
    this.ToastService.actionSheetSub
      .subscribe((menu: any[]) => {
        this.autoClose();
        this.showSheet = true;
        this.list = menu;
      });
  }
  public menuAction(action: string) {
    /**
     * 点击菜单
     */
    this.ToastService.actionBtnSub.next(action);
    this.showSheet = false;
  }
  private autoClose() {
    /**
     * 自动关闭
     */
    let sub = Observable.fromEvent(document.body, 'click')
      .subscribe((event) => {
        this.showSheet = false;
        sub.unsubscribe();
      });
  }
}
