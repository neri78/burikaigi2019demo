import { Component } from '@angular/core';
import { athletesData } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  name = 'StackBlitzでひらけるアプリだぜー';
  localData = athletesData;
}
