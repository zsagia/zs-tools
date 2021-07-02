import { SportCategoryEnum } from '../enum';

export interface FixtureModel {
    date: Date;
    id: string;
    sportCategory: SportCategoryEnum;
    team1: string;
    team2: string;
}
