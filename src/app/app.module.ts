import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderItemComponent } from './order-item.component';
import { BakeService } from './service/bake.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [BakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
