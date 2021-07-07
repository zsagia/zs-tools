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
        return this.footballBuilder.buildMatch();
    }

    public createMatches(): FixtureModel[] {
        return this.footballBuilder.buildRoundMatches(1, FootballClubNames.england);
    }

    public createChampionshipRounds(): any[] {
        return this.footballBuilder.createChampionshipRounds()
    }
}
