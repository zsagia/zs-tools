import { Injectable } from '@angular/core';
import { FixtureModel, MatchModel, ModelFactory } from '@zs-tools/api';
import { FootballClubsService } from '@zs-tools/data/clubs';

import { FootballBuilder } from '../builder';

@Injectable()
export class FootballModelFactory extends ModelFactory {
    public constructor(private footballBuilder: FootballBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        return this.footballBuilder.buildMatch(
            undefined,
            FootballClubsService.getHungaryClubs()[0],
            FootballClubsService.getHungaryClubs()[1]
        );
    }

    public createMatches(): FixtureModel[] {
        return [];
    }

    public createRounds(): FixtureModel[][] {
        return this.footballBuilder.buildRounds(FootballClubsService.getHungaryClubs());
    }
}
