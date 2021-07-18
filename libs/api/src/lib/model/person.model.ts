import { SkillSetModel } from './skill-set.model';

export interface PersonModel {
    avatar?: string;
    birthDay?: Date;
    email?: string;
    firstName: string;
    gender?: string;
    lastName: string;
    nationalityI18n?: string;
    nickName?: string;
    phone?: string;
    skillSets?: SkillSetModel;
}
