import { Injectable } from '@angular/core';
import { FixtureModel, MatchModel, ModelFactory } from '@zs-tools/api';

import { FootballBuilder } from '../builder';
import { FootballClubNames } from '../constant';

@Injectable()
export class FootballModelFactory extends ModelFactory {
    public constructor(private footballBuilder: FootballBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        return this.footballBuilder.buildMatch(undefined, FootballClubNames.england[0], FootballClubNames.england[1]);
    }

    public createMatches(): FixtureModel[] {
        return [];
    }

    public createRounds(): FixtureModel[][] {
        return this.footballBuilder.buildRounds(FootballClubNames.hungary);
    }
}
