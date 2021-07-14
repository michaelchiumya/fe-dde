import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    MenubarModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
