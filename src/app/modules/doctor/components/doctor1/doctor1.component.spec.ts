/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Doctor1Component } from './doctor1.component';

describe('Doctor1Component', () => {
  let component: Doctor1Component;
  let fixture: ComponentFixture<Doctor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doctor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
