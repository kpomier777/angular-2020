/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Owner1Component } from './owner1.component';

describe('Owner1Component', () => {
  let component: Owner1Component;
  let fixture: ComponentFixture<Owner1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Owner1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Owner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
