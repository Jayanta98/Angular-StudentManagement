import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesectionComponent } from './profilesection.component';

describe('ProfilesectionComponent', () => {
  let component: ProfilesectionComponent;
  let fixture: ComponentFixture<ProfilesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
