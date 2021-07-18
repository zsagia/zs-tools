import { Injectable } from '@angular/core';
import { FixtureModel, MatchFactory, MatchModel } from '@zs-tools/api';

import { HandballMatchBuilder } from '../../builder';

@Injectable()
export class HandballMatchFactory extends MatchFactory {
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
