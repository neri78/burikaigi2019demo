import { Component } from '@angular/core';
import { tweetData } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  name = 'Angular';
  localData = tweetData;
}
