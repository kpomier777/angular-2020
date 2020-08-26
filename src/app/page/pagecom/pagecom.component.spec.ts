/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagecomComponent } from './pagecom.component';

describe('PagecomComponent', () => {
  let component: PagecomComponent;
  let fixture: ComponentFixture<PagecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
