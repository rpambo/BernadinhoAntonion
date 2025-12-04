import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLogo } from './slide-logo';

describe('SlideLogo', () => {
  let component: SlideLogo;
  let fixture: ComponentFixture<SlideLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
