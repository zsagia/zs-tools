import { ClubModel } from '@zs-tools/api';

export interface TableItemModel {
    drawn: number;
    lost: number;
    played: number;
    position: number;
    round: number;
    scoresAgainst: number;
    scoresFor: number;
    team: ClubModel;
    won: number;
}
