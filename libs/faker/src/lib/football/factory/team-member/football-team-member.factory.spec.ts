import { TestBed } from '@angular/core/testing';

import { FootballTeamMemberFactory } from './football-team-member.factory';

describe('FootballTeamMemberFactory', () => {
    let service: FootballTeamMemberFactory;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FootballTeamMemberFactory);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
