import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInputMessageComponent } from './error-input-message.component';

describe('ErrorInputMessageComponent', () => {
  let component: ErrorInputMessageComponent;
  let fixture: ComponentFixture<ErrorInputMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorInputMessageComponent]
    });
    fixture = TestBed.createComponent(ErrorInputMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
