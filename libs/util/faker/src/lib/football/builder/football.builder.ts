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

import { FootballClubNames } from '../constant';

@Injectable()
export class FootballBuilder extends FakerBuilder {
    public readonly TEAM1_GOALS = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4];
    public readonly TEAM2_GOALS = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];

    public buildFixture(date?: Date, team1?: string, team2?: string): FixtureModel {
        return {
            id: this.createId(),
            competition: CompetitionTypes.TRAINING,
            sportCategory: SportCategoryEnum.FOOTBALL,
            team1: team1 || this.createClubName(FootballClubNames.england),
            team2: team2 || this.createClubName(FootballClubNames.england),
            date: date || this.createSoonDate(),
        };
    }

    public buildMatch(date?: Date): MatchModel {
        return {
            ...this.buildFixture(date),
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

    public buildRoundMatches(round: number, teamNames: string[]): FixtureModel[] {
        const teamNamesHelper = [...teamNames];

        return Array.from({ length: teamNames.length / 2 }, () => {
            const team1 = faker.random.arrayElement(teamNamesHelper);

            teamNamesHelper.splice(teamNamesHelper.indexOf(team1), 1);

            const team2 = faker.random.arrayElement(teamNamesHelper);

            teamNamesHelper.splice(teamNamesHelper.indexOf(team2), 1);

            return this.buildFixture(undefined, team1, team2);
        });
    }

    public createChampionshipRounds(): any[] {
        return this.createRounds(FootballClubNames.england);
    }
}
