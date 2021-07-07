import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FootballMatchModel, MatchModel, ModelFactory } from '@zs-tools/api';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-tools-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    public title = 'zs-tools-demo';

    public match: FootballMatchModel | undefined;
    public match2: FootballMatchModel | undefined;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public component$$: Subject<any> | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public inputs$$: Subject<any> | undefined;

    public constructor(private modelFactory: ModelFactory) {
        this.component$$ = new ReplaySubject();
        this.inputs$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.match = this.modelFactory.createMatch() as FootballMatchModel;
        this.match2 = this.modelFactory.createMatch() as FootballMatchModel;
        
        const matches = this.modelFactory.createMatches();
        const rounds = this.modelFactory.createChampionshipRounds();

        console.log(matches);
        console.log(rounds);

        this.inputs$$?.next({
            match: this.match,
            isHeader: true,
        });

        console.log(this.match);
    }
}
