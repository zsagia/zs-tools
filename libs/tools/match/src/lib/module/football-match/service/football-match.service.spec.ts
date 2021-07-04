import { TestBed } from '@angular/core/testing';

import { FootballMatchService } from './football-match.service';

describe('FootballMatchService', () => {
    let service: FootballMatchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FootballMatchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
