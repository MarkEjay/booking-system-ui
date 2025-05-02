import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAvailabilityComponent } from './merchant-availability.component';

describe('MerchantAvailabilityComponent', () => {
  let component: MerchantAvailabilityComponent;
  let fixture: ComponentFixture<MerchantAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
