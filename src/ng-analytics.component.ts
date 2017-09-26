import { Component, OnInit } from '@angular/core';

import { NgAnalyticsService } from './ng-analytics.service';

@Component({
	selector: 'ng-analytics-component',
	template: '{{greeting}}'
})
export class NgAnalyticsComponent implements OnInit {

	greeting: string;

	constructor(private service: NgAnalyticsService) { }

	ngOnInit() {
		this.greeting = this.service.sayHello();
	}
}