import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sky3Component } from './sky3.component';

describe('Sky3Component', () => {
  let component: Sky3Component;
  let fixture: ComponentFixture<Sky3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sky3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sky3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
