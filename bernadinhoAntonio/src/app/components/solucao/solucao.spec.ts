import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solucao } from './solucao';

describe('Solucao', () => {
  let component: Solucao;
  let fixture: ComponentFixture<Solucao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solucao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solucao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
