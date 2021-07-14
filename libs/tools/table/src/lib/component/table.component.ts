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
    public selectedRoundTableItems$$: Subject<TableItemModel[]>;

    @Input()
    public matches: MatchModel[] | undefined;
    @Input()
    public title = 'Table';
    @Input()
    public selectedRoundIndex = 1;

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
