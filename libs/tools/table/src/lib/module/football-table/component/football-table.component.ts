import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TableComponent } from '../../../component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-tools-football-table',
    templateUrl: './football-table.component.html',
    styleUrls: ['./football-table.component.less'],
})
export class FootballTableComponent extends TableComponent {
   
}
