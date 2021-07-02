import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModelFactory } from '@zs-tools/api';

import { FootballBuilder } from './builder';
import { FootballModelFactory } from './factory';

@NgModule({
    imports: [CommonModule],
    providers: [
        FootballBuilder,
        {
            provide: ModelFactory,
            useClass: FootballModelFactory,
        },
    ],
})
export class FootballFakerModule {}
