import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent, MatchModel } from '@zs-tools/api';

import { TableItemModel } from '../model';
import { TableService } from '../service';

@Component({
    template: '',
})
export abstract class TableComponent extends BaseComponent implements OnInit {
    protected tableItems: TableItemModel[][] | undefined;

    @Input()
    public matches: MatchModel[][] | undefined;

    public constructor(protected tableService: TableService) {
        super();
    }

    public ngOnInit(): void {
        this.tableService
            .init$()
            .pipe(
                tap(() => {
                    console.log();
                }),
                takeUntil(this.destroy$$)
            )
            .subscribe();
    }
}
