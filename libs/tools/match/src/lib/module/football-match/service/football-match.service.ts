import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class FootballMatchService {
    public init$(): Observable<void> {
        return of();
    }
}
