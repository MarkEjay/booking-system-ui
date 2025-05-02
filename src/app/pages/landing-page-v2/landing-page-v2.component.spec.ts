import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageV2Component } from './landing-page-v2.component';

describe('LandingPageV2Component', () => {
  let component: LandingPageV2Component;
  let fixture: ComponentFixture<LandingPageV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
