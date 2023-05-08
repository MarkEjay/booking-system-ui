import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCalenderComponent } from './merchant-calender.component';

describe('MerchantCalenderComponent', () => {
  let component: MerchantCalenderComponent;
  let fixture: ComponentFixture<MerchantCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
