import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MatchComponent } from '../../../component';
import { FootballMatchService } from '../service';
import { FootballMatchModel } from '@zs-tools/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FootballMatchService],
    selector: 'zs-football-match',
    templateUrl: './football-match.component.html',
    styleUrls: ['./football-match.component.less'],
})
export class FootballMatchComponent extends MatchComponent implements OnInit {
    public match: FootballMatchModel | undefined;

    public constructor(private componentService: FootballMatchService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    console.log();
                }),
                takeUntil(this.destroy$$)
            )
            .subscribe();
    }
}
