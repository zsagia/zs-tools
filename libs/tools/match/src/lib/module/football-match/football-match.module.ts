import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FootballMatchComponent } from './component';

@NgModule({
    declarations: [FootballMatchComponent],
    exports: [FootballMatchComponent],
    imports: [CommonModule],
})
export class FootballMatchModule {}
