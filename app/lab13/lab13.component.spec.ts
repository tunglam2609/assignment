import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab13Component } from './lab13.component';

describe('Lab13Component', () => {
  let component: Lab13Component;
  let fixture: ComponentFixture<Lab13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
