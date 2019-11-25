import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab09Component } from './lab09.component';

describe('Lab09Component', () => {
  let component: Lab09Component;
  let fixture: ComponentFixture<Lab09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
