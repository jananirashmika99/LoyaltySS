import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopmanyProfileComponent } from './copmany-profile.component';

describe('CopmanyProfileComponent', () => {
  let component: CopmanyProfileComponent;
  let fixture: ComponentFixture<CopmanyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopmanyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopmanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
