import { FixtureModel, MatchModel } from '../model';

export abstract class MatchFactory {
    public abstract createMatch(): MatchModel;

    public abstract createMatches(): FixtureModel[];

    public abstract createRounds(): FixtureModel[][];
}
