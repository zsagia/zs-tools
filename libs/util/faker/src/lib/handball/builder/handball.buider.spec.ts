import { TestBed } from '@angular/core/testing';

import { HandballBuilder } from './handball.builder';

describe('HandballBuilder', () => {
    let service: HandballBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HandballBuilder);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
