import { TestBed } from '@angular/core/testing';

import { FootballBuilder } from './football.builder';

describe('FootballBuilder', () => {
    let service: FootballBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FootballBuilder);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
