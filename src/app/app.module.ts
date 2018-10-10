import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent } from './app.home';
import { DetailComponent } from './app.detail';
import { routing }       from './app.routing';
import { AboutComponent } from './app.about';
import { LinksComponent } from './app.links';
import { FormsModule } from '@angular/forms';
import {PriceComp} from './app.priceComp'

@NgModule({
  declarations: [
    AppComponent, DetailComponent, HomeComponent, AboutComponent, LinksComponent, PriceComp
  ],
  imports: [
    BrowserModule, HttpModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
