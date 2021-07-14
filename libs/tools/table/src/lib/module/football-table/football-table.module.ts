import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataRulesModule } from '@zs-tools/data/rules';

import { TableService } from '../../service';
import { FootballTableComponent } from './component';
import { FootballTableService } from './service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FootballTableComponent],
    exports: [FootballTableComponent],
    imports: [CommonModule, DataRulesModule, FormsModule, NzInputNumberModule, NzTableModule],
    providers: [
        {
            provide: TableService,
            useValue: FootballTableService,
        },
    ],
})
export class FootballTableModule {}
