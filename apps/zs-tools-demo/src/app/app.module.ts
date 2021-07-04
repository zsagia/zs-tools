import { DynamicIoModule, DynamicModule } from 'ng-dynamic-component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FootballFakerModule } from '@zs-tools/util/faker';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DynamicModule, DynamicIoModule, FootballFakerModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
