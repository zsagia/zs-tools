import { Injectable } from '@angular/core';
import { FixtureModel, MatchModel, ModelFactory } from '@zs-tools/api';

import { HandballBuilder } from '../builder';

@Injectable()
export class HandballModelFactory extends ModelFactory {
    public createRounds(): FixtureModel[][] {
        throw new Error('Method not implemented.');
    }
    public createMatches(): FixtureModel[] {
        throw new Error('Method not implemented.');
    }
    public constructor(private handballBuilder: HandballBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        return this.handballBuilder.buildMatch();
    }
}
