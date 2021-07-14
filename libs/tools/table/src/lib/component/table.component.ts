import { ReplaySubject, Subject } from 'rxjs';
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
    public matches: MatchModel[] | undefined;
    @Input()
    public selectedRoundIndex = 1;
    public selectedRoundTableItems$$: Subject<TableItemModel[]>;
    @Input()
    public title = 'Table';

    public constructor(protected tableService: TableService) {
        super();

        this.selectedRoundTableItems$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.tableService
            .init$(this.matches, this.selectedRoundIndex)
            .pipe(
                tap(() => {
                    this.selectedRoundIndex = this.tableService.getTableItemsRounds().length;
                    this.selectedRoundTableItems$$.next(this.tableService.getLatestSelectedRound());
                }),
                takeUntil(this.destroy$$)
            )
            .subscribe();
    }

    public onRoundIndex(): void {
        this.selectedRoundTableItems$$.next(this.tableService.getSelectedRound(this.selectedRoundIndex));
    }
}
