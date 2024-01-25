/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   styleUrl: './app.component.scss',
//   templateUrl: './app.component.html',
// })
// export class AppComponent {
//   public title: string = 'AngularBootCamp';
// }

import { filter, map } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';

const warmUp: (water: string) => string = (water: string): string =>
  `${water}-warm`;

const stream$: Observable<string> = of('water');

const waterSubscription$: Subscription = stream$
  .pipe(
    filter((water: string): boolean => water === 'water'),
    map((water: string): string => warmUp(water)),
  )
  .subscribe((water: string): void => console.log('Take a shower', water));

waterSubscription$.unsubscribe();

// .pipe(filter((water: string): boolean => water === 'water'))
// filter
