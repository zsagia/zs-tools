import { takeUntil, tap } from 'rxjs/operators';

import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent, MatchModel } from '@zs-tools/api';

import { TableItemModel } from '../model';
import { TableService } from '../service';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
    template: '',
})
export abstract class TableComponent extends BaseComponent implements OnInit {
    protected tableItems: TableItemModel[][] | undefined;
    public selectedRound$$: Subject<TableItemModel[]>;

    @Input()
    public matches: MatchModel[] | undefined;

    public constructor(protected tableService: TableService) {
        super();

        this.selectedRound$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.tableService
            .init$(this.matches)
            .pipe(
                tap(() => {
                    this.selectedRound$$.next(this.tableService.getSelectedRound());
                }),
                takeUntil(this.destroy$$)
            )
            .subscribe();
    }
}
