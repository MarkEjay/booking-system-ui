import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantServiceListComponent } from './merchant-service-list.component';

describe('MerchantServiceListComponent', () => {
  let component: MerchantServiceListComponent;
  let fixture: ComponentFixture<MerchantServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantServiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
