import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
