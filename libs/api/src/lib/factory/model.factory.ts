import { FixtureModel, MatchModel } from '../model';

export abstract class ModelFactory {
    public abstract createMatch(): MatchModel;

    public abstract createMatches(): FixtureModel[];

    public abstract createRounds(): FixtureModel[][];
}
