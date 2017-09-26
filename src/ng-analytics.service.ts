import { Injectable } from '@angular/core';
import { NgAnalyticsInterface } from './ng-analytics.interface';

import {
	HitInfo,
	EventHitInfo,
	PageHitInfo,
	SocialHitInfo,
	ScreenHitInfo,
	TimingHitInfo,
	ExceptionHitInfo
} from './ng-analytics.interface';

@Injectable()
export class NgAnalytics implements NgAnalyticsInterface {
	private activeAnalytics: NgAnalyticsInterface[] = [];

	constructor() {
	}

	support(vendorAnalytics: NgAnalyticsInterface[]) {
		for (const vendorInterface of vendorAnalytics) {
			this.activeAnalytics.push(vendorInterface);
		}
	}
	track(value: string, info?: any, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.track(value, info, fields);
		}
	}
	send(hitInfo: HitInfo, info?: any, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.send(hitInfo, info, fields);
		}
	}
	event(eventInfo: EventHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.event(eventInfo, fields);
		}
	}
	page(pageInfo: PageHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.page(pageInfo, fields);
		}
	}
	social(socialInfo: SocialHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.social(socialInfo, fields);
		}
	}
	screen(screenInfo: ScreenHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.screen(screenInfo, fields);
		}
	}
	timing(timingInfo: TimingHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.timing(timingInfo, fields);
		}
	}
	exception(exceptionInfo: ExceptionHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.exception(exceptionInfo, fields);
		}
	}
	set(name: string, value: string) {
		for (const analytics of this.activeAnalytics) {
			analytics.set(name, value);
		}
	}
	createProfile(id: string, properties: any) {
		for (const analytics of this.activeAnalytics) {
			analytics.createProfile(id, properties);
		}
	}

}
