import {
    NgAnalyticsInterface,
    HitInfo,
    EventHitInfo,
    PageHitInfo,
    SocialHitInfo,
    ScreenHitInfo,
    TimingHitInfo,
    ExceptionHitInfo
} from '../ng-analytics.interface';

declare const ga: any;

export class NgAnalyticsGoogle implements NgAnalyticsInterface {
    private ready(): boolean {
        try {
            if (ga) { return true; }
            return false;
        } catch (error) {
            return false;
        }
    }
    send(hitInfo: HitInfo, info?: any, fields?: any) {
        if (!this.ready()) { return; }
        switch (hitInfo.type) {
            case 'event': this.event(info, fields); break;
            case 'page': this.page(info, fields); break;
            case 'social': this.social(info, fields); break;
            case 'screenview': this.screen(info, fields); break;
            case 'timing': this.timing(info, fields); break;
            case 'exception': this.exception(info, fields); break;
        }
    }
    track(value: string, info?: any, fields?: any) {
        switch (value) {
            case 'event': this.event(info, fields); break;
            case 'page': this.page(info, fields); break;
            case 'social': this.social(info, fields); break;
            case 'screenview': this.screen(info, fields); break;
            case 'timing': this.timing(info, fields); break;
            case 'exception': this.exception(info, fields); break;
            default: 
                if (fields) {
                    this.event(info, Object.assign({trackValue: value}, fields)); break;
                }
                else {
                    this.event(info, {trackValue: value}); break;
                }
        }
    }
    event(eventInfo: EventHitInfo, fields?: any) {
        if (!this.ready()) { return; }
        ga('send', 'event', eventInfo, fields);
    }
    page(pageInfo: PageHitInfo, fields?: any) {
        if (!this.ready()) { return; }
        ga('send', 'page', pageInfo, fields);
    }
    social(socialInfo: SocialHitInfo, fields?: any) {
        if (!this.ready()) { return; }
        ga('send', 'social', socialInfo, fields);
    }
    screen(screenInfo: ScreenHitInfo, fields?: any) {
        if (!this.ready()) { return; }
        ga('send', 'screenview', screenInfo, fields);
    }
    timing(timingInfo: TimingHitInfo, fields?: any) {
        if (!this.ready()) { return; }
        ga('send', 'timing', timingInfo, fields);
    }
    exception(exceptionInfo: ExceptionHitInfo, fields?: any) {
        if (!this.ready()) { return; }
        ga('send', 'exception', exceptionInfo, fields);
    }
    set(name: any, value?: string) {
        if (!this.ready()) { return; }
        if (typeof name === 'object') {
            ga('set', name);
        } else if (typeof name === 'string' && typeof value === 'string') {
            ga('set', name, value);
        }
    }
    createProfile(id: string, properties: any) {
        if (!this.ready()) { return; }
        ga('set', 'userId', id);
    }

}