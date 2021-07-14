import { ClubModel } from '@zs-tools/api';

export interface TableItemModel {
    drawn: number;
    lastPosition: number;
    lost: number;
    played: number;
    points: number;
    position: number;
    round: number;
    scoreAgainst: number;
    scoreFor: number;
    team: ClubModel;
    won: number;
}
