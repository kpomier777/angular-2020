/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ad2Component } from './ad2.component';

describe('Ad2Component', () => {
  let component: Ad2Component;
  let fixture: ComponentFixture<Ad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
