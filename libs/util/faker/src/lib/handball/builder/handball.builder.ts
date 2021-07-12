import { Injectable } from '@angular/core';
import { FakerBuilder, FixtureModel, MatchModel, ResultModel } from '@zs-tools/api';

@Injectable()
export class HandballBuilder extends FakerBuilder {
    public readonly MAX_GOALS = 3;
    public readonly MIN_GOALS = 0;

    public addDatesForRounds(rounds: FixtureModel[][], startDate: Date): FixtureModel[][] {
        throw new Error('Method not implemented.');
    }

    public buildFixture(team1: string, team2: string, round?: number): FixtureModel {
        throw new Error('Method not implemented.');
    }

    public buildMatch(date: Date | undefined, team1: string, team2: string, round?: number): MatchModel {
        throw new Error('Method not implemented.');
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
