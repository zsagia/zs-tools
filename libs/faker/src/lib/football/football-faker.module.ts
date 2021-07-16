import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModelFactory } from '@zs-tools/api';

import { FootballMatchBuilder } from './builder';
import { FootballModelFactory } from './factory';

@NgModule({
    imports: [CommonModule],
    providers: [
        FootballMatchBuilder,
        {
            provide: ModelFactory,
            useClass: FootballModelFactory,
        },
    ],
})
export class FootballFakerModule {}
