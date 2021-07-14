import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FootballRulesService } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [FootballRulesService],
})
export class DataRulesModule {}
