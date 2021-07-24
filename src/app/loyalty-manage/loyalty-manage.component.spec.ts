import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyManageComponent } from './loyalty-manage.component';

describe('LoyaltyManageComponent', () => {
  let component: LoyaltyManageComponent;
  let fixture: ComponentFixture<LoyaltyManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
