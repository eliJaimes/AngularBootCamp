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

import { Subscription } from 'rxjs';

const subscription: Subscription = observable$.subscribe({
  complete: (): void => console.log('✅ - Done'),
  error: (error: Error): void =>
    console.error('❌ - Something wrong occurred: %O', error),
  next: (value: unknown): void => console.log('✔️ - Got value %O', value),
});
