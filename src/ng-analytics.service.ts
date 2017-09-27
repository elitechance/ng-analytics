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

	private _debugEnable: boolean = false;

	public get debugEnable(): boolean {
		return this._debugEnable;
	}

	public set debugEnable(value: boolean) {
		this._debugEnable = value;
	}
	
	support(vendorAnalytics: NgAnalyticsInterface[]) {
		this.debug('supports', vendorAnalytics);
		for (const vendorInterface of vendorAnalytics) {
			this.activeAnalytics.push(vendorInterface);
		}
	}
	track(value: string, info?: any, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('track', typeof analytics, value, info, fields);
			analytics.track(value, info, fields);
		}
	}
	send(hitInfo: HitInfo, info?: any, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('send', typeof analytics, hitInfo, info, fields);
			analytics.send(hitInfo, info, fields);
		}
	}
	event(eventInfo: EventHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('event', typeof analytics, eventInfo, fields);
			analytics.event(eventInfo, fields);
		}
	}
	page(pageInfo: PageHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('page', typeof analytics, pageInfo, fields);
			analytics.page(pageInfo, fields);
		}
	}
	social(socialInfo: SocialHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('social', typeof analytics, socialInfo, fields);
			analytics.social(socialInfo, fields);
		}
	}
	screen(screenInfo: ScreenHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('screen', typeof analytics, screenInfo, fields);
			analytics.screen(screenInfo, fields);
		}
	}
	timing(timingInfo: TimingHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('timing', typeof analytics, timingInfo, fields);
			analytics.timing(timingInfo, fields);
		}
	}
	exception(exceptionInfo: ExceptionHitInfo, fields?: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('exception', typeof analytics, exceptionInfo, fields);
			analytics.exception(exceptionInfo, fields);
		}
	}
	set(name: string, value: string) {
		for (const analytics of this.activeAnalytics) {
			this.debug('set', typeof analytics, name, value);
			analytics.set(name, value);
		}
	}
	createProfile(id: string, properties: any) {
		for (const analytics of this.activeAnalytics) {
			this.debug('createProfile', typeof analytics, id, properties);
			analytics.createProfile(id, properties);
		}
	}

	private debug(...args: any[]) {
		if (this.debugEnable) {
			console.log.apply(this, args);
		}
	}

}
