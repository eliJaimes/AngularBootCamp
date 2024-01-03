/* ••[1]••••••••••••••••••••••••• my-first-inline-component.component.spec.ts •••••••••••••••••••••••••••••• */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFirstInlineComponentComponent } from './my-first-inline-component.component';

describe('MyFirstInlineComponentComponent', (): void => {
  let component: MyFirstInlineComponentComponent | undefined = undefined;
  let fixture: ComponentFixture<MyFirstInlineComponentComponent> | undefined =
    undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [MyFirstInlineComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyFirstInlineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
