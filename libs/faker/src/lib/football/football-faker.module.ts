import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatchFactory, TeamMemberFactory } from '@zs-tools/api';

import { FootballMatchBuilder, FootballTeamMemberBuilder } from './builder';
import { FootballMatchFactory } from './factory';
import { FootballTeamMemberFactory } from './factory/team-member';

@NgModule({
    imports: [CommonModule],
    providers: [
        FootballMatchBuilder,
        FootballTeamMemberBuilder,
        {
            provide: MatchFactory,
            useClass: FootballMatchFactory,
        },
        {
            provide: TeamMemberFactory,
            useClass: FootballTeamMemberFactory,
        },
    ],
})
export class FootballFakerModule {}
