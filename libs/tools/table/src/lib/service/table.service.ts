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
    protected selectedRoundIndex = 1;

    public init$(matches: MatchModel[] | undefined, selectedRoundIndex: number | undefined): Observable<boolean> {
        this.matches = matches || [];

        this.tableItemsRounds = this.processMatches(this.matches);

        this.selectedRoundIndex = selectedRoundIndex || this.tableItemsRounds.length;

        return of(true);
    }

    public getSelectedRound(round: number): TableItemModel[] {
        return this.tableItemsRounds[round - 1];
    }

    public getLatestSelectedRound(): TableItemModel[] {
        return this.tableItemsRounds[this.tableItemsRounds.length - 1];
    }

    public getTableItemsRounds(): TableItemModel[][] {
        return this.tableItemsRounds;
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

    protected cloneClubRoundMap(clubRoundMap: Map<string, TableItemModel>): Map<string, TableItemModel> {
        const clonedClubRoundMap = new Map<string, TableItemModel>();

        Array.from(clubRoundMap.entries()).forEach((entry) =>
            clonedClubRoundMap.set(entry[0], {
                ...entry[1],
            })
        );

        return clonedClubRoundMap;
    }

    protected makeClubRoundsMap(matches: MatchModel[]) {
        const clubRoundsMap = new Map<number, Map<string, TableItemModel>>();

        matches.forEach((match) => {
            const team1 = match.team1;
            const team2 = match.team2;
            const round = match.round || 0;
            const clubRound =
                clubRoundsMap.get(round) || clubRoundsMap.get(round - 1) || new Map<string, TableItemModel>();

            const clubRoundMap: Map<string, TableItemModel> = this.cloneClubRoundMap(clubRound);

            const team1TableItem = clubRoundMap.get(team1.name) || {
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

            clubRoundMap.set(team1.name, team1TableItem);

            const team2TableItem = clubRoundMap.get(team2.name) || {
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

            clubRoundMap.set(team2.name, team2TableItem);

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

            this.sortMatches(roundTableItems);

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

    private sortMatches(roundTableItems: TableItemModel[]) {
        roundTableItems.sort(function (tableItem1, tableItem2) {
            const pointsDifference = tableItem1.points - tableItem2.points;

            if (pointsDifference !== 0) {
                return pointsDifference;
            } else {
                const team1ScoreDifference = tableItem1.scoreFor - tableItem1.scoreAgainst;
                const team2ScoreDifference = tableItem2.scoreFor - tableItem2.scoreAgainst;

                if (team1ScoreDifference !== team2ScoreDifference) {
                    return team1ScoreDifference - team2ScoreDifference;
                } else {
                    return tableItem1.scoreFor - tableItem2.scoreFor;
                }
            }
        });
    }
}
