import { startOfYear, subYears } from 'date-fns';
import * as faker from 'faker';

import { Injectable } from '@angular/core';
import { PersonModel, TeamMemberBuilder } from '@zs-tools/api';
import { LocaleNames, NAMES } from '../../constant';

@Injectable()
export class FootballTeamMemberBuilder extends TeamMemberBuilder {
    public constructor() {
        super();
    }

    public buildPerson(locale: string, gender: string, minAge: number, maxAge: number): PersonModel {
        let names: LocaleNames | undefined;

        switch (locale) {
            case 'hu':
                names = NAMES.hu;

                break;
            default:
                throw new Error();

                break;
        }

        return {
            avatar: faker.image.avatar(),
            gender,
            firstName: faker.random.arrayElement(gender === 'male' ? names.firstNamesMale : names.firstNamesFemale),
            lastName: faker.random.arrayElement(names.secondNames),
            birthDay: faker.date.between(
                subYears(startOfYear(new Date()), minAge),
                subYears(startOfYear(new Date()), maxAge)
            ),
        };
    }
}
