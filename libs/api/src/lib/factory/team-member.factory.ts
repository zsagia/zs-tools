import { PersonModel } from '../model';

export abstract class TeamMemberFactory {
    public abstract createFemale(locale: string, minAge: number, maxAge: number): PersonModel;
    public abstract createMale(locale: string, minAge: number, maxAge: number): PersonModel;
}
