import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgAnalyticsService } from './ng-analytics.service';
import { NgAnalyticsComponent } from './ng-analytics.component';

export function ngAnalyticsServiceFactory() {
	return new NgAnalyticsService();
}

@NgModule({
	imports: [ CommonModule ],
	providers: [
		{ provide: NgAnalyticsService, useFactory: ngAnalyticsServiceFactory }
	],
	declarations: [ NgAnalyticsComponent ],
	exports: [ NgAnalyticsComponent ]
})
export class NgAnalyticsModule { }
