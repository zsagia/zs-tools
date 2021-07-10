import { ReplaySubject, Subject } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FootballMatchModel, ModelFactory } from '@zs-tools/api';
import { FootballBuilder } from '@zs-tools/util/faker';
import { MatchViewModeEnum } from '@zs-tools/tools/match';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-tools-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public component$$: Subject<any> | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public inputs$$: Subject<any> | undefined;
    public match: FootballMatchModel | undefined;
    public match2: FootballMatchModel | undefined;
    public rounds: FootballMatchModel[][] | undefined;
    public title = 'zs-tools-demo';
    public mode = MatchViewModeEnum.LEFT;

    public constructor(private modelFactory: ModelFactory, private footballBuilder: FootballBuilder) {
        this.component$$ = new ReplaySubject();
        this.inputs$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.match = this.modelFactory.createMatch() as FootballMatchModel;
        this.match2 = this.modelFactory.createMatch() as FootballMatchModel;

        this.rounds = this.modelFactory.createRounds() as FootballMatchModel[][];

        const modifiedRounds = this.footballBuilder.addDatesForRounds(this.rounds, new Date());

        console.log(this.rounds);
        console.log(modifiedRounds);

        this.inputs$$?.next({
            match: this.match,
            isHeader: true,
        });

        console.log(this.match);
    }
}
