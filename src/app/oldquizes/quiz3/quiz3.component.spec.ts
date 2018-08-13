import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz3Component } from './quiz3.component';

describe('Quiz3Component', () => {
  let component: Quiz3Component;
  let fixture: ComponentFixture<Quiz3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
