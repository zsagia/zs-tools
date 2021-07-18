import { PersonModel } from '../model';

export abstract class TeamMemberBuilder {
    public abstract buildPerson(locale: string, gender: string, minAge: number, maxAge: number): PersonModel;
}
