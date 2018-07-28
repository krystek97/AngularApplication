import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sky2Component } from './sky2.component';

describe('Sky2Component', () => {
  let component: Sky2Component;
  let fixture: ComponentFixture<Sky2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sky2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sky2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
