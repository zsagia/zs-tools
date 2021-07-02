import { Injectable } from '@angular/core';
import { MatchModel, ModelFactory } from '@zs-tools/api';

import { FootballBuilder } from '../builder';

@Injectable()
export class FootballModelFactory extends ModelFactory {
    public constructor(private footballBuilder: FootballBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        return this.footballBuilder.buildMatch();
    }
}
