/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Us2Component } from './us2.component';

describe('Us2Component', () => {
  let component: Us2Component;
  let fixture: ComponentFixture<Us2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Us2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Us2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
