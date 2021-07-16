import * as faker from 'faker';

import { ClubModel, FixtureModel, MatchModel } from '../model';

export abstract class MatchBuilder {
    public abstract addDatesForRounds(rounds: FixtureModel[][], startDate: Date): FixtureModel[][];
    public abstract addResult(match: MatchModel): MatchModel;
    public abstract buildFixture(team1: ClubModel, team2: ClubModel, round?: number): FixtureModel;
    public abstract buildMatch(date: Date | undefined, team1: ClubModel, team2: ClubModel, round?: number): MatchModel;
    public abstract buildRound(roundItems: ClubModel[][], round: number): FixtureModel[];
    public abstract buildRounds(teamNames: ClubModel[]): FixtureModel[][];

    protected calculateHomeAway(roundItems: ClubModel[][][]): ClubModel[][][] {
        const optimizedRoundItems = [roundItems[0].map((roundItem) => roundItem.reverse())];

        for (let i = 1; i < roundItems.length; i++) {
            const positionMap = new Map<ClubModel, number>();

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

    protected createRoundItems(teams: ClubModel[]): ClubModel[][][] {
        const teamsNumber = teams.length;
        const roundNumber = teamsNumber - 1;
        const halfNumber = teamsNumber / 2;
        const rounds: ClubModel[][][] = [];
        const teamIndexes: number[] = teams.map((_, i) => i).slice(1);

        for (let index = 0; index < roundNumber; index++) {
            const roundPairings: ClubModel[][] = [];
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
