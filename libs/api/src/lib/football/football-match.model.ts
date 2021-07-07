import { MatchModel } from '../model';
import { FootballMatchResultModel } from './footbal-match-result.model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FootballMatchModel extends MatchModel {
    result: FootballMatchResultModel;
}
