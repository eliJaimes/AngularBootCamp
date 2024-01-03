import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  it('should create an instance', (): void => {
    const directive: AppComponent = new AppComponent();
    expect(directive).toBeTruthy();
  });
});
