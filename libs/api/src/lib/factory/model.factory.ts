import { MatchModel } from '@zs-tools/api';

export abstract class ModelFactory {
    public abstract createMatch(): MatchModel;
}
