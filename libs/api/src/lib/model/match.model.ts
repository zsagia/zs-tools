import { FixtureModel } from './fixture.model';
import { ResultModel } from './result.model';

export interface MatchModel extends FixtureModel {
    result: ResultModel;
}
