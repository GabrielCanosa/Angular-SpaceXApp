import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiinfoComponent } from './apiinfo.component';

describe('ApiinfoComponent', () => {
  let component: ApiinfoComponent;
  let fixture: ComponentFixture<ApiinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
