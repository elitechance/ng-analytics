import {
    NgAnalyticsInterface,
    HitInfo,
    EventHitInfo,
    PageHitInfo,
    SocialHitInfo,
    ScreenFields,
    ScreenHitInfo,
    TimingHitInfo,
    ExceptionHitInfo
} from '../ng-analytics.interface';

declare const mixpanel: any;

export class NgAnalyticsMixPanel implements NgAnalyticsInterface {
    private ready(): boolean {
        try {
            if (mixpanel) { return true; }
            return false;
        } catch (error) {
            return false;
        }
    }
    send(hitInfo: HitInfo, info?: any, fields?: any) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track(hitInfo.type, Object.assign(info, fields));
        }
        else {
            mixpanel.track(hitInfo.type, info);
        }
    }
    event(eventInfo: EventHitInfo, fields?: any) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track('event', Object.assign(eventInfo, fields));
        } else {
            mixpanel.track('event', eventInfo);
        }
    }
    page(pageInfo: PageHitInfo, fields?: any) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track('page', Object.assign(pageInfo, fields));
        } else {
            mixpanel.track('page', pageInfo);
        }
    }
    social(socialInfo: SocialHitInfo, fields?: any) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track('social', Object.assign(socialInfo, fields));
        } else {
            mixpanel.track('social', socialInfo);
        }
    }
    screen(screenInfo: ScreenHitInfo, fields?: ScreenFields) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track('screen', Object.assign(screenInfo, fields));
        } else {
            mixpanel.track('screen', screenInfo);
        }
    }
    timing(timingInfo: TimingHitInfo, fields?: any) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track('timing', Object.assign(timingInfo, fields));
        } else {
            mixpanel.track('timing', timingInfo);
        }
    }
    exception(exceptionInfo: ExceptionHitInfo, fields?: any) {
        if(!this.ready()) { return; }
        if (fields) {
            mixpanel.track('exception', Object.assign(exceptionInfo, fields));
        } else {
            mixpanel.track('exception', exceptionInfo);
        }
    }
    set(name: any, value?: string) {
        if(!this.ready()) { return; }
        if (name === 'identity') {
            mixpanel.identity(value);
        }
        else if (typeof name === 'object') {
            mixpanel.people.set(value);
        }
    }
    createProfile(id: string, properties: any) {
        if(!this.ready()) { return; }
        mixpanel.identify(id);
        mixpanel.people.set(properties);
    }

}