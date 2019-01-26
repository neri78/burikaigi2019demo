import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxNavbarModule, IgxGridModule} from 'igniteui-angular';
import 'hammerjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, IgxNavbarModule, IgxGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
