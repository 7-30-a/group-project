import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz8Component } from './quiz8.component';

describe('Quiz8Component', () => {
  let component: Quiz8Component;
  let fixture: ComponentFixture<Quiz8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
