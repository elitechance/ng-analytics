import { Component, OnInit } from '@angular/core';

import { NgAnalytics } from './ng-analytics.service';

@Component({
	selector: 'ng-analytics-component',
	template: '<div>Greetings: {{greeting}}</div>'
})
export class NgAnalyticsComponent implements OnInit {

	greeting: string;

	constructor(private service: NgAnalytics ) { }

	ngOnInit() {
		this.greeting = "Hello";
	}
}