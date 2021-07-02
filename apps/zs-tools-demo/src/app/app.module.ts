import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HandballFakerModule } from '@zs-tools/util/faker';
import { DynamicIoModule, DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DynamicModule, DynamicIoModule, HandballFakerModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
