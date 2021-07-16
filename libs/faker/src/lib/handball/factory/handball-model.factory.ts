import { Injectable } from '@angular/core';
import { FixtureModel, MatchModel, ModelFactory } from '@zs-tools/api';

import { HandballMatchBuilder } from '../builder';

@Injectable()
export class HandballModelFactory extends ModelFactory {
    public constructor(private handballMatchBuilder: HandballMatchBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        throw new Error('Method not implemented.');
    }

    public createMatches(): FixtureModel[] {
        throw new Error('Method not implemented.');
    }

    public createRounds(): FixtureModel[][] {
        throw new Error('Method not implemented.');
    }
}
