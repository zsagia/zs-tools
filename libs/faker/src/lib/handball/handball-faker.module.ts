import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatchFactory } from '@zs-tools/api';

import { HandballMatchBuilder } from './builder';
import { HandballMatchFactory } from './factory';

@NgModule({
    imports: [CommonModule],
    providers: [
        HandballMatchBuilder,
        {
            provide: MatchFactory,
            useClass: HandballMatchFactory,
        },
    ],
})
export class HandballFakerModule {}
