import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModelFactory } from '@zs-tools/api';

import { HandballBuilder } from './builder';
import { HandballModelFactory } from './factory';

@NgModule({
    imports: [CommonModule],
    providers: [
        HandballBuilder,
        {
            provide: ModelFactory,
            useClass: HandballModelFactory,
        },
    ],
})
export class HandballFakerModule {}
