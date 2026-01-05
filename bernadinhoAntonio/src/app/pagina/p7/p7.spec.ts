import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P7 } from './p7';

describe('P7', () => {
  let component: P7;
  let fixture: ComponentFixture<P7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
