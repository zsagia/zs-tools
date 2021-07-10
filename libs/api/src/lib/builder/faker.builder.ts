import * as faker from 'faker';

import { FixtureModel, MatchModel } from '../model';

export abstract class FakerBuilder {
    public abstract addDatesForRounds(rounds: FixtureModel[][], startDate: Date): FixtureModel[][];
    public abstract buildFixture(team1: string, team2: string, round?: number): FixtureModel;
    public abstract buildMatch(date: Date | undefined, team1: string, team2: string, round?: number): MatchModel;
    public abstract buildRound(roundItems: string[][], round: number): FixtureModel[];
    public abstract buildRounds(teamNames: string[]): FixtureModel[][];

    protected calculateHomeAway(roundItems: string[][][]): string[][][] {
        const optimizedRoundItems = [roundItems[0].map((roundItem) => roundItem.reverse())];

        for (let i = 1; i < roundItems.length; i++) {
            const positionMap = new Map<string, number>();

            roundItems[i - 1].forEach((roundItem) => {
                positionMap.set(roundItem[0], 0);
                positionMap.set(roundItem[1], 1);
            });

            optimizedRoundItems.push(
                roundItems[i].map((roundItem) => {
                    if (positionMap.get(roundItem[0]) === 0 && positionMap.get(roundItem[1]) === 1) {
                        return roundItem.reverse();
                    } else {
                        return roundItem;
                    }
                })
            );
        }

        return optimizedRoundItems;
    }

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

    protected createRoundItems(teams: string[]): string[][][] {
        const teamsNumber = teams.length;
        const roundNumber = teamsNumber - 1;
        const halfNumber = teamsNumber / 2;
        const rounds: string[][][] = [];
        const teamIndexes: number[] = teams.map((_, i) => i).slice(1);

        for (let index = 0; index < roundNumber; index++) {
            const roundPairings: string[][] = [];
            const newTeamIndexes = [0].concat(teamIndexes);
            const firstHalf = newTeamIndexes.slice(0, halfNumber);
            const secondHalf = newTeamIndexes.slice(halfNumber, teamsNumber).reverse();

            for (let i = 0; i < firstHalf.length; i++) {
                roundPairings.push([teams[firstHalf[i]], teams[secondHalf[i]]]);
            }

            const element = teamIndexes.shift();

            if (element) {
                teamIndexes.push(element);
            }

            rounds.push(roundPairings);
        }

        return rounds;
    }

    protected createSoonDate(): Date {
        const date = faker.date.soon();

        date.setMinutes(0);
        date.setSeconds(0);

        return date;
    }
}
