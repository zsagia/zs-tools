import { CompetitionTypes, SportCategoryEnum } from '../enum';

export interface FixtureModel {
    competition: CompetitionTypes;
    date: Date;
    id: string;
    round?: number;
    sportCategory: SportCategoryEnum;
    team1: string;
    team2: string;
}
