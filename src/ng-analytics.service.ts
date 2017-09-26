import { Injectable } from '@angular/core';

@Injectable()
export class NgAnalyticsService {

	constructor() { }

	sayHello(name?: string) {
		return "Hello ${name}!";
	}

}
