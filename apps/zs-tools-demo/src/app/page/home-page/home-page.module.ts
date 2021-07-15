import { DynamicIoModule, DynamicModule } from 'ng-dynamic-component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FootballMatchModule } from '@zs-tools/tools/match';
import { FootballTableModule } from '@zs-tools/tools/table';
import { FootballFakerModule } from '@zs-tools/util/faker';

import { HomePageComponent } from './component';
import { HomePageRouterModule } from './home-page-router.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePageRouterModule,
        DynamicModule,
        DynamicIoModule,
        FormsModule,
        FootballFakerModule,
        FootballTableModule,
        FootballMatchModule,
        NzLayoutModule
    ],
})
export class HomePageModule {}
