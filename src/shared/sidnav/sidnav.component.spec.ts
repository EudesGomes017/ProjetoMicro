/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidnavComponent } from './sidnav.component';

describe('SidnavComponent', () => {
  let component: SidnavComponent;
  let fixture: ComponentFixture<SidnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
