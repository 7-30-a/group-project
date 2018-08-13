import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz4Component } from './quiz4.component';

describe('Quiz4Component', () => {
  let component: Quiz4Component;
  let fixture: ComponentFixture<Quiz4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
