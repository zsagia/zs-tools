import { Injectable } from '@angular/core';
import { FakerBuilder, FixtureModel, MatchModel, Result, SportCategoryEnum } from '@zs-tools/api';

import { FootballClubNames } from '../constant';

@Injectable()
export class FootballBuilder extends FakerBuilder {
    public readonly MAX_GOALS = 3;
    public readonly MIN_GOALS = 0;

    public buildFixture(date?: Date): FixtureModel {
        return {
            id: this.createId(),
            sportCategory: SportCategoryEnum.FOOTBALL,
            team1: this.createClubName(FootballClubNames.england),
            team2: this.createClubName(FootballClubNames.england),
            date: date || this.createSoonDate(),
        };
    }

    public buildMatch(date?: Date): MatchModel {
        return {
            id: this.createId(),
            sportCategory: SportCategoryEnum.FOOTBALL,
            team1: this.createClubName(FootballClubNames.england),
            team2: this.createClubName(FootballClubNames.england),
            date: date || this.createPastDate(),
            result: this.buildResult(),
        };
    }

    public buildResult(): Result {
        return {};
    }
}
