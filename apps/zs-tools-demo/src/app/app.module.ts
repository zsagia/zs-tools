import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
    bootstrap: [AppComponent],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppModule {}
