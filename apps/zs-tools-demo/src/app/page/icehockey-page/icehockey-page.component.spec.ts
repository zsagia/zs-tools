import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcehockeyPageComponent } from './icehockey-page.component';

describe('IcehockeyPageComponent', () => {
    let component: IcehockeyPageComponent;
    let fixture: ComponentFixture<IcehockeyPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IcehockeyPageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IcehockeyPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
