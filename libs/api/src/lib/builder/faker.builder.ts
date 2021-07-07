import * as faker from 'faker';

import { FixtureModel, MatchModel } from '../model';

export abstract class FakerBuilder {
    public abstract buildFixture(date: Date): FixtureModel;
    public abstract buildMatch(date: Date): MatchModel;
    public abstract buildRoundMatches(round: number, teamNames: string[]): FixtureModel[];
    public abstract createChampionshipRounds(): any[];

    protected createClubName(clubNames: string[]): string {
        return faker.random.arrayElement(clubNames);
    }

    protected createId(): string {
        return faker.datatype.uuid();
    }

    protected createPastDate(): Date {
        const date = faker.date.past();

        date.setMinutes(0);
        date.setSeconds(0);

        return date;
    }

    protected createPeriodGoals(min: number, max: number): number {
        return faker.datatype.number({ min, max });
    }

    protected createSoonDate(): Date {
        const date = faker.date.soon();

        date.setMinutes(0);
        date.setSeconds(0);

        return date;
    }

    protected createRounds(teams: string[]): any[] {
        const teamsNumber = teams.length;
        const roundNumber = teamsNumber - 1;
        const halfNumber = teamsNumber / 2;
        const rounds: any[] = [];
        const teamIndexes: number[] = teams.map((_, i) => i).slice(1);

        for (let index = 0; index < roundNumber; index++) {
            const roundPairings = [];

            const newTeamIndexes = [0].concat(teamIndexes);

            const firstHalf = newTeamIndexes.slice(0, halfNumber);
            const secondHalf = newTeamIndexes.slice(halfNumber, teamsNumber).reverse();

            for (let i = 0; i < firstHalf.length; i++) {
                roundPairings.push({
                    team1: teams[firstHalf[i]],
                    team2: teams[secondHalf[i]],
                });
            }

            const element = teamIndexes.shift();

            if (element) {
                teamIndexes.push(element);
            }

            rounds.push(roundPairings);
            
        }

        return rounds;
    }
}
