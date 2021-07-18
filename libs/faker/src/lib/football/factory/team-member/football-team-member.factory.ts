import { Injectable } from '@angular/core';
import { PersonModel, TeamMemberFactory } from '@zs-tools/api';

import { FootballTeamMemberBuilder } from '../../builder';

@Injectable()
export class FootballTeamMemberFactory extends TeamMemberFactory {
    public constructor(private footballTeamMemberBuilder: FootballTeamMemberBuilder) {
        super();
    }

    public createFemale(locale: string, minAge: number, maxAge: number): PersonModel {
        return this.footballTeamMemberBuilder.buildPerson(locale, 'female', minAge, maxAge);
    }

    public createMale(locale: string, minAge: number, maxAge: number): PersonModel {
        return this.footballTeamMemberBuilder.buildPerson(locale, 'male', minAge, maxAge);
    }
}
