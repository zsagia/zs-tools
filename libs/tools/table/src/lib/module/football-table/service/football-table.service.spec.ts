import { TestBed } from '@angular/core/testing';

import { FootballTableService } from './football-table.service';

describe('FootballTableService', () => {
    let service: FootballTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FootballTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
