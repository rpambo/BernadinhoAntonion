import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P7Section } from './p7-section';

describe('P7Section', () => {
  let component: P7Section;
  let fixture: ComponentFixture<P7Section>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P7Section]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P7Section);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
