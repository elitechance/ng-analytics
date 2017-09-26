import { Directive, ElementRef, Injectable, Input, AfterContentInit } from '@angular/core';
import { NgAnalytics } from './ng-analytics.service';

@Injectable()
@Directive({ selector: '[ngaTrack]' })
export class NgAnalyticsTrackDirective implements AfterContentInit {
    @Input() ngaProperties: any;
    @Input() ngaTriggerEvent: string;

    constructor(private element: ElementRef, private analytics: NgAnalytics) {
    }

    ngAfterContentInit(): void {
        const nativeElement = this.element.nativeElement;
        const attributes: NamedNodeMap = nativeElement.attributes;
        const trackValue = attributes.getNamedItem('ngatrack').value;
        if (typeof this.ngaTriggerEvent === 'object') {
            for (const triggerEvent of this.ngaTriggerEvent) {
                nativeElement.addEventListener(triggerEvent, (event: any) => {
                    this.analytics.track(trackValue, this.ngaProperties);
                })
            }
        } else {
            nativeElement.addEventListener(this.ngaTriggerEvent || 'click', (event: any) => {
                this.analytics.track(trackValue, this.ngaProperties);
            })
        }
    }

}