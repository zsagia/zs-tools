import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableService } from '../../service';
import { FootballTableComponent } from './component';
import { FootballTableService } from './service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DataRulesModule } from '@zs-tools/data/rules';

@NgModule({
    declarations: [FootballTableComponent],
    exports: [FootballTableComponent],
    imports: [CommonModule, NzTableModule, DataRulesModule],
    providers: [
        {
            provide: TableService,
            useValue: FootballTableService,
        },
    ],
})
export class FootballTableModule {}
