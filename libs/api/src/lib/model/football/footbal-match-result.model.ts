import { ResultModel } from '../result.model';

export interface FootballMatchResultModel extends ResultModel {
    team1Half1: number;
    team1Half2: number;
    team2Half1: number;
    team2Half2: number;
}
