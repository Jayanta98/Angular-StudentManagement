import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustombuttonComponent } from './custombutton.component';

describe('CustombuttonComponent', () => {
  let component: CustombuttonComponent;
  let fixture: ComponentFixture<CustombuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustombuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustombuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
