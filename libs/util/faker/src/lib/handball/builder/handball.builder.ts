import { Injectable } from '@angular/core';
import {
    CompetitionTypes,
    FakerBuilder,
    FixtureModel,
    MatchModel,
    ResultModel,
    SportCategoryEnum,
} from '@zs-tools/api';

import { HandballClubNames } from '../constant';

@Injectable()
export class HandballBuilder extends FakerBuilder {
    public readonly MAX_GOALS = 3;
    public readonly MIN_GOALS = 0;

    public buildFixture(date?: Date): FixtureModel {
        return {
            competition: CompetitionTypes.TRAINING,
            id: this.createId(),
            sportCategory: SportCategoryEnum.HANDBALL,
            team1: this.createClubName(HandballClubNames.hungary),
            team2: this.createClubName(HandballClubNames.hungary),
            date: date || this.createSoonDate(),
        };
    }

    public buildMatch(date?: Date): MatchModel {
        return {
            ...this.buildFixture(date),
            result: this.buildResult(),
        };
    }

    public buildResult(): ResultModel {
        return {};
    }

    public buildRound(roundItems: string[][], round: number): FixtureModel[] {
        throw new Error('Method not implemented.');
    }

    public buildRounds(teamNames: string[]): FixtureModel[][] {
        throw new Error('Method not implemented.');
    }
}
