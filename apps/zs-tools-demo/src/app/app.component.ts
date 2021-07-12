import { ReplaySubject, Subject } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FootballMatchModel, ModelFactory } from '@zs-tools/api';
import { FootballBuilder } from '@zs-tools/util/faker';
import { MatchViewModeEnum } from '@zs-tools/tools/match';
import { KeyValue } from '@angular/common';
import { startOfDay } from 'date-fns';

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
    public matchLists$$: Subject<KeyValue<string, FootballMatchModel[]>[]>;
    public title = 'zs-tools-demo';
    public mode = MatchViewModeEnum.LEFT;

    public constructor(private modelFactory: ModelFactory, private footballBuilder: FootballBuilder) {
        this.component$$ = new ReplaySubject();
        this.inputs$$ = new ReplaySubject();
        this.matchLists$$ = new ReplaySubject();
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

        this.matchLists$$.next(this.createMatchLists(this.rounds));

        this.rounds = [
            ...this.rounds.map((round) =>
                round.map((match) => {
                    this.footballBuilder.addResult(match);
                    this.rounds = [...modifiedRounds] as FootballMatchModel[][];

                    return match;
                })
            ),
        ];
    }

    private createMatchLists(rounds: FootballMatchModel[][]): KeyValue<string, FootballMatchModel[]>[] {
        const matches = rounds.reduce((accumulator, round) => {
            accumulator.push(...round);

            return accumulator;
        }, []);

        const matchMap: Map<string, FootballMatchModel[]> = new Map();

        matches
            .sort((a, b) => {
                const aDate = a.date ? a.date : '';
                const bDate = b.date ? b.date : '';

                return aDate < bDate ? -1 : 1;
            })
            .forEach((match) => {
                const matchDateAsString = match.date ? startOfDay(match.date).toDateString() : '';
                const dateMatches = matchMap.get(matchDateAsString) || [];

                dateMatches.push(match);

                matchMap.set(matchDateAsString, dateMatches);
            });

        return Array.from(matchMap.entries()).map((entry) => ({
            key: entry[0],
            value: entry[1],
        }));
    }
}
