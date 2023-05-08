import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAddServiceComponent } from './merchant-add-service.component';

describe('MerchantAddServiceComponent', () => {
  let component: MerchantAddServiceComponent;
  let fixture: ComponentFixture<MerchantAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAddServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
