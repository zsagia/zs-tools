import { TestBed } from '@angular/core/testing';

import { FootballMatchBuilder } from './football-match.builder';

describe('FootballMatchBuilder', () => {
    let service: FootballMatchBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FootballMatchBuilder);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
