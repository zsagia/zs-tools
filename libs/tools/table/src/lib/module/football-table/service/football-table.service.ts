import { Injectable } from '@angular/core';

import { TableService } from '../../../service';

@Injectable()
export class FootballTableService extends TableService {
    public constructor() {
        super();
    }
}
