import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantEditServiceComponent } from './merchant-edit-service.component';

describe('MerchantEditServiceComponent', () => {
  let component: MerchantEditServiceComponent;
  let fixture: ComponentFixture<MerchantEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantEditServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
