import { FixtureModel } from './fixture.model';
import { Result } from './result.model';

export interface MatchModel extends FixtureModel {
    result: Result;
}
