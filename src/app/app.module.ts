import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import { MyExComponent } from './my-ex/my-ex.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { DetailStockComponent } from './stock/detail-stock/detail-stock.component';
import { StorageDemoComponent } from './storage-demo/storage-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyExComponent,
    StockComponent,
    HomeComponent,
    Page404Component,
    DetailStockComponent,
    StorageDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
