import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clone1Component } from './clone1.component';

describe('Clone1Component', () => {
  let component: Clone1Component;
  let fixture: ComponentFixture<Clone1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clone1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
