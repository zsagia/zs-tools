import { TestBed } from '@angular/core/testing';

import { HandballMatchBuilder } from './handball-match.builder';

describe('HandballMatchBuilder', () => {
    let service: HandballMatchBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HandballMatchBuilder);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
