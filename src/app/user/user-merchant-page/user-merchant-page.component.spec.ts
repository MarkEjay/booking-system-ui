import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMerchantPageComponent } from './user-merchant-page.component';

describe('UserMerchantPageComponent', () => {
  let component: UserMerchantPageComponent;
  let fixture: ComponentFixture<UserMerchantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMerchantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMerchantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
