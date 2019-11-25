import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab06Component } from './lab06.component';

describe('Lab06Component', () => {
  let component: Lab06Component;
  let fixture: ComponentFixture<Lab06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
