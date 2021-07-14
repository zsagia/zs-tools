import { Observable, of } from 'rxjs';

import { ClubModel, MatchModel, RuleSetModel } from '@zs-tools/api';

import { TableItemModel } from '../model';

export const DefaultRuleSet: RuleSetModel = {
    periodNumber: 0,
    periodTimeInMinutes: 0,
    pointsForDrawn: 0,
    pointsForLost: 0,
    pointsForWin: 0,
};

export abstract class TableService {
    protected matches: MatchModel[] | undefined;
    protected tableItemsRounds: TableItemModel[][] = [];
    protected ruleSet = DefaultRuleSet;

    public init$(matches: MatchModel[] | undefined): Observable<boolean> {
        this.matches = matches || [];

        this.tableItemsRounds = this.processMatches(this.matches);

        return of(true);
    }

    public getSelectedRound(round?: number): TableItemModel[] {
        return this.tableItemsRounds[round || this.tableItemsRounds.length - 1];
    }

    protected addPoints(
        teamTableItem: TableItemModel,
        scoreFor: number,
        scoreAgainst: number,
        ruleSet: RuleSetModel
    ): TableItemModel {
        teamTableItem.scoreAgainst += scoreAgainst;
        teamTableItem.scoreFor += scoreFor;
        teamTableItem.played += 1;

        if (scoreFor > scoreAgainst) {
            teamTableItem.points += ruleSet.pointsForWin;
            teamTableItem.won += 1;
        } else if (scoreFor === scoreAgainst) {
            teamTableItem.points += ruleSet.pointsForDrawn;
            teamTableItem.drawn += 1;
        } else {
            teamTableItem.lost += 1;
            teamTableItem.points += ruleSet.pointsForLost;
        }

        return teamTableItem;
    }

    protected cloneClubRoundMap(clubRoundMap: Map<ClubModel, TableItemModel>): Map<ClubModel, TableItemModel> {
        const clonedClubRoundMap = new Map<ClubModel, TableItemModel>();

        Array.from(clubRoundMap.entries()).forEach((entry) =>
            clonedClubRoundMap.set(entry[0], {
                ...entry[1],
            })
        );

        return clonedClubRoundMap;
    }

    protected makeClubRoundsMap(matches: MatchModel[]) {
        const clubRoundsMap = new Map<number, Map<ClubModel, TableItemModel>>();

        matches.forEach((match) => {
            const team1 = match.team1;
            const team2 = match.team2;
            const round = match.round || 0;
            const clubRound =
                clubRoundsMap.get(round) || clubRoundsMap.get(round - 1) || new Map<ClubModel, TableItemModel>();

            const clubRoundMap: Map<ClubModel, TableItemModel> = this.cloneClubRoundMap(clubRound);

            const team1TableItem = clubRound.get(team1) || {
                position: 0,
                lastPosition: 0,
                team: team1,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                round,
                scoreFor: 0,
                scoreAgainst: 0,
                points: 0,
            };

            this.addPoints(team1TableItem, match.result.team1Final, match.result.team2Final, this.ruleSet);

            clubRoundMap.set(team1, team1TableItem);

            const team2TableItem = clubRound.get(team2) || {
                position: 0,
                lastPosition: 0,
                team: team2,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                round,
                scoreFor: 0,
                scoreAgainst: 0,
                points: 0,
            };

            this.addPoints(team2TableItem, match.result.team2Final, match.result.team1Final, this.ruleSet);

            clubRoundMap.set(team2, team2TableItem);

            clubRoundsMap.set(round, clubRoundMap);
        });

        return clubRoundsMap;
    }

    public processMatches(matches: MatchModel[]): TableItemModel[][] {
        const clubRoundsMap = this.makeClubRoundsMap(matches);
        const rounds: TableItemModel[][] = [];
        const clubPositionsMap = new Map<string, number>();

        Array.from(clubRoundsMap).forEach((entry) => {
            const roundTableItems: TableItemModel[] = [];

            Array.from(entry[1]).forEach((teamTableItem) => {
                roundTableItems.push(teamTableItem[1]);
            });

            roundTableItems.sort(function (tableItem1, tableItem2) {
                const pointsDifference = tableItem1.points - tableItem2.points;

                if (pointsDifference !== 0) {
                    return pointsDifference;
                } else {
                    const team1ScoreDifference = tableItem1.scoreFor - tableItem2.scoreAgainst;
                    const team2ScoreDifference = tableItem1.scoreFor - tableItem2.scoreAgainst;

                    if (team1ScoreDifference !== team2ScoreDifference) {
                        return team1ScoreDifference - team2ScoreDifference;
                    } else {
                        return tableItem1.scoreFor - tableItem2.scoreFor;
                    }
                }
            });

            roundTableItems.reverse();

            roundTableItems.forEach(function (tableItem, index) {
                const teamName = tableItem.team.name;
                const lastPosition = clubPositionsMap.get(teamName) || 0;

                tableItem.position = index + 1;

                clubPositionsMap.set(teamName, index + 1);

                tableItem.lastPosition = lastPosition;
            });

            rounds.push(roundTableItems);
        });

        return rounds;
    }
}
