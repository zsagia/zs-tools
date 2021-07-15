import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FootballPageComponent } from './component';
import { FootballPageRouterModule } from './football-page-router.module';

@NgModule({
    declarations: [FootballPageComponent],
    imports: [CommonModule, FootballPageRouterModule],
})
export class FootballPageModule {}
