import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshoppingitemComponent } from './addshoppingitem.component';

describe('AddshoppingitemComponent', () => {
  let component: AddshoppingitemComponent;
  let fixture: ComponentFixture<AddshoppingitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshoppingitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshoppingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
