import { Component, Input } from '@angular/core';
import { BaseComponent, MatchModel } from '@zs-tools/api';

@Component({
    template: '',
})
export abstract class MatchComponent extends BaseComponent {
    @Input()
    public match: MatchModel | undefined;
    @Input()
    public showHeader = false;
    @Input()
    public showResult = false;
    @Input()
    public showTimeAsSeparator = false;

    public constructor() {
        super();
    }
}
