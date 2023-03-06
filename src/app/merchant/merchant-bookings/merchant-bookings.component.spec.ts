import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantBookingsComponent } from './merchant-bookings.component';

describe('MerchantBookingsComponent', () => {
  let component: MerchantBookingsComponent;
  let fixture: ComponentFixture<MerchantBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
