import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../component';
import { FootballTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FootballTableService],
    selector: 'zs-football-table',
    templateUrl: './football-table.component.html',
    styleUrls: ['./football-table.component.less'],
})
export class FootballTableComponent extends TableComponent implements OnInit {
    public animation = 'hidden';

    public constructor(private footballTableService: FootballTableService) {
        super(footballTableService);
    }

    public trackByItem(index: number, item: any) {
        return item.team.name;
    }
}
