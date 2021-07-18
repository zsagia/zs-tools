import { TestBed } from '@angular/core/testing';

import { FootballTeamMemberBuilder } from './football-team-member.builder';

describe('PersonSerFootballTeamMemberBuildervice', () => {
    let service: FootballTeamMemberBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FootballTeamMemberBuilder);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
