import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMerchantListComponent } from './user-merchant-list.component';

describe('UserMerchantListComponent', () => {
  let component: UserMerchantListComponent;
  let fixture: ComponentFixture<UserMerchantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMerchantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMerchantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
