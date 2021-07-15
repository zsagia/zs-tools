import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FootballPageComponent } from './component';

export const routes = [
    {
        path: '',
        component: FootballPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FootballPageRouterModule {}
