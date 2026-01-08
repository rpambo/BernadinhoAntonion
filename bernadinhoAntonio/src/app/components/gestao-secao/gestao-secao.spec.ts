import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSecao } from './gestao-secao';

describe('GestaoSecao', () => {
  let component: GestaoSecao;
  let fixture: ComponentFixture<GestaoSecao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSecao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSecao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
