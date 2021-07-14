import { Injectable } from '@angular/core';
import { FootballRulesService } from '@zs-tools/data/rules';

import { TableService } from '../../../service';

@Injectable()
export class FootballTableService extends TableService {
    public constructor(private footballRuleService: FootballRulesService) {
        super();

        this.ruleSet = this.footballRuleService.getFootballRules();
    }
}
