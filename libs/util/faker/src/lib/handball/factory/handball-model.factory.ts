import { Injectable } from '@angular/core';
import { MatchModel, ModelFactory } from '@zs-tools/api';

import { HandballBuilder } from '../builder';

@Injectable()
export class HandballModelFactory extends ModelFactory {
    public constructor(private handballBuilder: HandballBuilder) {
        super();
    }

    public createMatch(): MatchModel {
        return this.handballBuilder.buildMatch();
    }
}
