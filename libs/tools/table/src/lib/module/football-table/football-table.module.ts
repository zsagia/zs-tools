import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableService } from '../../service';
import { FootballTableComponent } from './component';
import { FootballTableService } from './service';

@NgModule({
    declarations: [FootballTableComponent],
    exports: [FootballTableComponent],
    imports: [CommonModule],
    providers: [
        {
            provide: TableService,
            useValue: FootballTableService,
        },
    ],
})
export class FootballTableModule {}
