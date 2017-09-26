import { NgAnalyticsTrackDirective } from './ng-analytics-track.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgAnalytics } from './ng-analytics.service';
import { NgAnalyticsComponent } from './ng-analytics.component';

export function ngAnalyticsServiceFactory() {
	return new NgAnalytics();
}

@NgModule({
	imports: [ CommonModule ],
	providers: [
		{ provide: NgAnalytics, useFactory: ngAnalyticsServiceFactory },
	],
	declarations: [ NgAnalyticsComponent, NgAnalyticsTrackDirective ],
	exports: [ NgAnalyticsComponent, NgAnalyticsTrackDirective ]
})
export class NgAnalyticsModule { }
