import * as faker from 'faker';

import { Injectable } from '@angular/core';
import {
    CompetitionTypes,
    FakerBuilder,
    FixtureModel,
    FootballMatchResultModel,
    MatchModel,
    SportCategoryEnum,
} from '@zs-tools/api';

@Injectable()
export class FootballBuilder extends FakerBuilder {
    public readonly TEAM1_GOALS = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4];
    public readonly TEAM2_GOALS = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];

    public buildFixture(date: Date | undefined, team1: string, team2: string): FixtureModel {
        return {
            id: this.createId(),
            competition: CompetitionTypes.TRAINING,
            sportCategory: SportCategoryEnum.FOOTBALL,
            team1,
            team2,
            date: date || this.createSoonDate(),
        };
    }

    public buildMatch(date: Date | undefined, team1: string, team2: string): MatchModel {
        return {
            ...this.buildFixture(date, team1, team2),
            result: this.buildResult(),
        };
    }

    public buildResult(): FootballMatchResultModel {
        const team1Half1 = faker.random.arrayElement(this.TEAM1_GOALS);
        const team2Half1 = faker.random.arrayElement(this.TEAM2_GOALS);

        const team1Half2 = faker.random.arrayElement(this.TEAM1_GOALS);
        const team2Half2 = faker.random.arrayElement(this.TEAM2_GOALS);

        const team1Final = team1Half1 + team1Half2;
        const team2Final = team2Half1 + team2Half2;

        return {
            team1Half1,
            team1Half2,
            team2Half1,
            team2Half2,
            team1Final,
            team2Final,
        };
    }

    public buildRound(roundItems: string[][]): FixtureModel[] {
        return roundItems.map((roundItem) => this.buildMatch(undefined, roundItem[0], roundItem[1]));
    }

    public buildRounds(teamNames: string[]): FixtureModel[][] {
        return this.calculateHomeAway(this.createRoundItems(teamNames)).map((roundItem) => this.buildRound(roundItem));
    }
}
