import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab08Component } from './lab08.component';

describe('Lab08Component', () => {
  let component: Lab08Component;
  let fixture: ComponentFixture<Lab08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
