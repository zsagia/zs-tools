import { Injectable } from '@angular/core';
import { FakerBuilder, FixtureModel, MatchModel, Result, SportCategoryEnum } from '@zs-tools/api';

import { HandballClubNames } from '../constant';

@Injectable()
export class HandballBuilder extends FakerBuilder {
    public readonly MAX_GOALS = 3;
    public readonly MIN_GOALS = 0;

    public buildFixture(date?: Date): FixtureModel {
        return {
            id: this.createId(),
            sportCategory: SportCategoryEnum.HANDBALL,
            team1: this.createClubName(HandballClubNames.hungary),
            team2: this.createClubName(HandballClubNames.hungary),
            date: date || this.createSoonDate(),
        };
    }

    public buildMatch(date?: Date): MatchModel {
        return {
            id: this.createId(),
            sportCategory: SportCategoryEnum.HANDBALL,
            team1: this.createClubName(HandballClubNames.hungary),
            team2: this.createClubName(HandballClubNames.hungary),
            date: date || this.createPastDate(),
            result: this.buildResult(),
        };
    }

    public buildResult(): Result {
        return {};
    }
}
