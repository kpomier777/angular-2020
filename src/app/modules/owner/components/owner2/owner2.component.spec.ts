/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Owner2Component } from './owner2.component';

describe('Owner2Component', () => {
  let component: Owner2Component;
  let fixture: ComponentFixture<Owner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Owner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Owner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
