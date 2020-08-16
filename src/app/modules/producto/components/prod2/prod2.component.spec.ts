/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Prod2Component } from './prod2.component';

describe('Prod2Component', () => {
  let component: Prod2Component;
  let fixture: ComponentFixture<Prod2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prod2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
