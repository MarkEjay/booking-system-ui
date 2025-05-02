import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMerchantLookupComponent } from './user-merchant-lookup.component';

describe('UserMerchantLookupComponent', () => {
  let component: UserMerchantLookupComponent;
  let fixture: ComponentFixture<UserMerchantLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMerchantLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMerchantLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
