/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Animal1Component } from './animal1.component';

describe('Animal1Component', () => {
  let component: Animal1Component;
  let fixture: ComponentFixture<Animal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
