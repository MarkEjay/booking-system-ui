import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAccountSettingsComponent } from './merchant-account-settings.component';

describe('MerchantAccountSettingsComponent', () => {
  let component: MerchantAccountSettingsComponent;
  let fixture: ComponentFixture<MerchantAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAccountSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
