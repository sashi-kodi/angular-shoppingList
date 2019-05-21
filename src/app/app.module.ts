import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AddshoppingitemComponent } from './addshoppingitem/addshoppingitem.component';
import { ShoppinglistService } from './shoppinglist.service';
import { DisplaylistComponent } from './displaylist/displaylist.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    AddshoppingitemComponent,
    DisplaylistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
