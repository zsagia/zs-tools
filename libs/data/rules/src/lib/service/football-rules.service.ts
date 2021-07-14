import { RuleSetModel } from '@zs-tools/api';

export class FootballRulesService {
    protected ruleSet: RuleSetModel = {
        periodNumber: 2,
        periodTimeInMinutes: 45,
        pointsForDrawn: 1,
        pointsForLost: 0,
        pointsForWin: 3,
    };

    public getFootballRules(): RuleSetModel {
        return this.ruleSet;
    }
}
