import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaSection } from './renda-section';

describe('RendaSection', () => {
  let component: RendaSection;
  let fixture: ComponentFixture<RendaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
