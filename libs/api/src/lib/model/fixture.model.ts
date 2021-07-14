import { CompetitionTypes, SportCategoryEnum } from '../enum';
import { ClubModel } from './club.model';

export interface FixtureModel {
    competition: CompetitionTypes;
    date?: Date;
    id: string;
    round?: number;
    sportCategory: SportCategoryEnum;
    team1: ClubModel;
    team2: ClubModel;
}
