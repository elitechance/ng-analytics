export interface HitInfo {
    type?: string;
}

export interface EventHitInfo extends HitInfo {
    eventCategory: string
    eventAction: string
    eventLabel?: string
    eventValue?: number
}

export interface PageHitInfo extends HitInfo {
    title?: string
    location?: string
    page?: string
}

export interface SocialHitInfo extends HitInfo {
    socialNetwork: string
    socialAction: string
    socialTarget: string
}

export interface ScreenHitInfo extends HitInfo {
    screenName: string;
    appName: string;
    appVersion?: string;
    appInstallerId?: string;
    appId?: string;
}

export interface TimingHitInfo extends HitInfo {
    timingCategory: string;
    timingVar: string;
    timingValue: number;
    timingLabel?: string;
}

export interface ExceptionHitInfo extends HitInfo {
    description?: string;
    fatal?: boolean;
}

export interface NgAnalyticsInterface {
    track(value: string, info?: any, fields?: any): any;
    send(hitInfo: HitInfo, info?: any, fields?: any): any;
    event(eventInfo: EventHitInfo, fields?: any): any;
    page(pageInfo: PageHitInfo, fields?: any): void;
    social(socialInfo: SocialHitInfo, fields?: any): any;
    screen(screenInfo: ScreenHitInfo, fields?: any): any;
    timing(timingInfo: TimingHitInfo, fields?: any): any;
    exception(exceptionInfo: ExceptionHitInfo, fields?: any): any;
    set(name: any, value?: string): any;
    createProfile(id: string, properties: any): any;
}