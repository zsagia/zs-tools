import { Injectable } from '@angular/core';
import { ClubModel, FakerBuilder, FixtureModel, MatchModel, ResultModel } from '@zs-tools/api';

@Injectable()
export class HandballBuilder extends FakerBuilder {
    public readonly MAX_GOALS = 3;
    public readonly MIN_GOALS = 0;

    public addDatesForRounds(rounds: FixtureModel[][], startDate: Date): FixtureModel[][] {
        throw new Error('Method not implemented.');
    }

    public addResult(match: MatchModel): MatchModel {
        throw new Error('Method not implemented.');
    }

    public buildFixture(team1: ClubModel, team2: ClubModel, round?: number): FixtureModel {
        throw new Error('Method not implemented.');
    }

    public buildMatch(date: Date | undefined, team1: ClubModel, team2: ClubModel, round?: number): MatchModel {
        throw new Error('Method not implemented.');
    }

    public buildRound(roundItems: ClubModel[][], round: number): FixtureModel[] {
        throw new Error('Method not implemented.');
    }

    public buildRounds(teamNames: ClubModel[]): FixtureModel[][] {
        throw new Error('Method not implemented.');
    }
}
