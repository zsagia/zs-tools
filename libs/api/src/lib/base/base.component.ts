import { Subject } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';

@Component({
    template: '',
})
export class BaseComponent implements OnDestroy {
    protected destroy$$: Subject<void>;

    public constructor() {
        this.destroy$$ = new Subject();
    }

    public ngOnDestroy(): void {
        this.destroy$$.next();
    }
}
