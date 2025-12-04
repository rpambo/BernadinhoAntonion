import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreBernadino } from './sobre-bernadino';

describe('SobreBernadino', () => {
  let component: SobreBernadino;
  let fixture: ComponentFixture<SobreBernadino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreBernadino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreBernadino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
