# ng-analytics (alpha)

## Angular Analytics Abstraction

## Usage

#### Import the module

```typescript
...
@NgModule(
    {
      imports [..., NgAnalyticsModule]
      ...
    }
)
...
```

#### Inject the service

```typescript
constructor(ngAnalytics: NgAnalytics)
```

#### Setup preferred analytics

```typescript
this.ngAnalytics.support([new NgAnalyticsGoogle(), new NgAnalyticsMixPanel()])
```

#### Sample event trigger

```typescript
this.ngAnalytics.track('event', {eventCategory: 'video', eventAction: 'first play'})
```

## Support Custom Analytics

#### Implement NgAnalyticsInterface

```typescript
export class MyCustomAnalytics implements NgAnalyticsInterface {
  ....
}
```

#### Add your custom class

```typescript
this.ngAnalytics.support([...,new MyCustomAnalytics()]);
```

## Using ngaTrack directive

#### In your HTML, catch click and mouseover events to send tracking properties
```html
<button ngaTrack="event"
        [ngaTriggerEvent]="['click', 'mouseover']"
        [ngaProperties]="{eventCategory: 'button', eventAction: 'clicked or mouseover'}">
</button>
```
#### This is equivalent to

```typescript
if (click || mouseover) {
  this.ngAnalytics.track("event", {eventCategory: 'button', eventAction: 'clicked or mouseover'});
}
```

## Credits

> [Npm packaging template](https://github.com/davguij/angular-npm-module-seed)

### License

MIT
