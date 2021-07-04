import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchComponent } from './football-match.component';

describe('FootballMatchComponent', () => {
    let component: FootballMatchComponent;
    let fixture: ComponentFixture<FootballMatchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FootballMatchComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FootballMatchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
