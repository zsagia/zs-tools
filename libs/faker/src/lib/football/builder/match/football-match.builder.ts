import { add, endOfWeek, Interval, startOfWeek, subDays } from 'date-fns';
import * as faker from 'faker';

import { Injectable } from '@angular/core';
import {
    ClubModel,
    CompetitionTypes,
    FakerBuilder,
    FixtureModel,
    FootballMatchResultModel,
    MatchModel,
    SportCategoryEnum,
} from '@zs-tools/api';

@Injectable()
export class FootballMatchBuilder extends FakerBuilder {
    public readonly TEAM1_GOALS = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4];
    public readonly TEAM2_GOALS = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];

    public addDatesForRounds(rounds: FixtureModel[][], startDate: Date): FixtureModel[][] {
        let workDate = new Date(startDate);
        let roundInterval: Interval = {
            start: startOfWeek(workDate),
            end: endOfWeek(workDate),
        };

        return rounds.map((round) => {
            const modifiedRound = round.map((match) => {
                const randomizedWeekDays = faker.datatype.number(4);
                const endDate = new Date(roundInterval.end);
                const randomizedDate = faker.date.between(subDays(endDate, randomizedWeekDays), endDate);

                randomizedDate.setMilliseconds(0);
                randomizedDate.setSeconds(0);
                randomizedDate.setMinutes(0);
                randomizedDate.setHours(faker.random.arrayElement([13, 15, 17, 19, 21]));

                match.date = randomizedDate;

                return match;
            });

            workDate = add(workDate, { weeks: 1 });
            roundInterval = {
                start: startOfWeek(workDate),
                end: endOfWeek(workDate),
            };

            return modifiedRound;
        });
    }

    public addResult(match: MatchModel): MatchModel {
        match.result = this.buildResult();

        return match;
    }

    public buildFixture(team1: ClubModel, team2: ClubModel, round?: number): FixtureModel {
        const fixture: FixtureModel = {
            id: this.createId(),
            competition: CompetitionTypes.TRAINING,
            sportCategory: SportCategoryEnum.FOOTBALL,
            team1,
            team2,
        };

        if (round !== undefined) {
            fixture.round = round;
        }

        return fixture;
    }

    public buildMatch(date: Date | undefined, team1: ClubModel, team2: ClubModel, round?: number): MatchModel {
        return {
            ...this.buildFixture(team1, team2, round),
            date: date || this.createSoonDate(),
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

    public buildRound(roundItems: ClubModel[][], round: number): FixtureModel[] {
        return roundItems.map((roundItem) => this.buildFixture(roundItem[0], roundItem[1], round));
    }

    public buildRounds(teamNames: ClubModel[]): FixtureModel[][] {
        return this.calculateHomeAway(this.createRoundItems(teamNames)).map((roundItem, index) =>
            this.buildRound(roundItem, index)
        );
    }
}
