/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Doctor2Component } from './doctor2.component';

describe('Doctor2Component', () => {
  let component: Doctor2Component;
  let fixture: ComponentFixture<Doctor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doctor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
