/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Animal2Component } from './animal2.component';

describe('Animal2Component', () => {
  let component: Animal2Component;
  let fixture: ComponentFixture<Animal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
