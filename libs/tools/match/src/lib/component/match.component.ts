import { Component, Input } from '@angular/core';
import { BaseComponent, MatchModel } from '@zs-tools/api';

@Component({
    template: '',
})
export class MatchComponent extends BaseComponent {
    @Input()
    public match: MatchModel | undefined;
    @Input()
    public isHeader = false;

    public constructor() {
        super();
    }
}
