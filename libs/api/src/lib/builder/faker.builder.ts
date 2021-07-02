import * as faker from 'faker';

import { FixtureModel, MatchModel } from '../model';

export abstract class FakerBuilder {
    public abstract buildFixture(date: Date): FixtureModel;
    public abstract buildMatch(date: Date): MatchModel;

    protected createClubName(clubNames: string[]): string {
        return faker.random.arrayElement(clubNames);
    }

    protected createId(): string {
        return faker.datatype.uuid();
    }

    protected createPastDate(): Date {
        return faker.date.past();
    }

    protected createPeriodGoals(min: number, max: number): number {
        return faker.datatype.number({ min, max });
    }

    protected createSoonDate(): Date {
        return faker.date.soon();
    }
}
