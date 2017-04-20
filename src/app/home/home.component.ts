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
    this.toast.alert({ title: '11111', body: '22222' })
      .subscribe((val) => {
        console.log(val);
      }, (err) => {
        console.log(err);
      });
  }
}
