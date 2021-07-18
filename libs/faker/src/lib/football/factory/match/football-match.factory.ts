import { Injectable } from '@angular/core';
import { FixtureModel, MatchFactory, MatchModel } from '@zs-tools/api';
import { FootballClubsService } from '@zs-tools/data/clubs';

import { FootballMatchBuilder } from '../../builder';

@Injectable()
export class FootballMatchFactory extends MatchFactory {
    public constructor(private footballMatchBuilder: FootballMatchBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        return this.footballMatchBuilder.buildMatch(
            undefined,
            FootballClubsService.getHungaryClubs()[0],
            FootballClubsService.getHungaryClubs()[1]
        );
    }

    public createMatches(): FixtureModel[] {
        return [];
    }

    public createRounds(): FixtureModel[][] {
        return this.footballMatchBuilder.buildRounds(FootballClubsService.getHungaryClubs());
    }
}
