/* ••[1]••••••••••••••••••••••••• my-first-component.component.spec.ts •••••••••••••••••••••••••••••• */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFirstComponentComponent } from './my-first-component.component';

describe('MyFirstComponentComponent', (): void => {
  let component: MyFirstComponentComponent | undefined = undefined;
  let fixture: ComponentFixture<MyFirstComponentComponent> | undefined =
    undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [MyFirstComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
