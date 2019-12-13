import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpadsComponent } from './landingpads.component';

describe('LandingpadsComponent', () => {
  let component: LandingpadsComponent;
  let fixture: ComponentFixture<LandingpadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
