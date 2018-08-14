import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz9Component } from './quiz9.component';

describe('Quiz9Component', () => {
  let component: Quiz9Component;
  let fixture: ComponentFixture<Quiz9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
