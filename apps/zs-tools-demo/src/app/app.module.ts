import { DynamicIoModule, DynamicModule } from 'ng-dynamic-component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootballMatchModule } from '@zs-tools/tools/match';
import { FootballFakerModule } from '@zs-tools/util/faker';

import { AppComponent } from './app.component';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        DynamicModule,
        DynamicIoModule,
        FootballFakerModule,
        FootballMatchModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppModule {}
