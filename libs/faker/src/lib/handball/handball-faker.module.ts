import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModelFactory } from '@zs-tools/api';

import { HandballMatchBuilder } from './builder';
import { HandballModelFactory } from './factory';

@NgModule({
    imports: [CommonModule],
    providers: [
        HandballMatchBuilder,
        {
            provide: ModelFactory,
            useClass: HandballModelFactory,
        },
    ],
})
export class HandballFakerModule {}
