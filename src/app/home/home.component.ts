import {
  Component,
  OnInit
} from '@angular/core';
import { ToastService } from '../services';

@Component({
  selector: 'home',

  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private toast: ToastService
  ) { }

  public ngOnInit() {
    this.toast.showActionSheet([
      {
        name: 'test01',
        action: '123'
      }
    ])
      .subscribe((val) => console.log(val));
  }
}
