import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeRendaExtra } from './programa-de-renda-extra';

describe('ProgramaDeRendaExtra', () => {
  let component: ProgramaDeRendaExtra;
  let fixture: ComponentFixture<ProgramaDeRendaExtra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeRendaExtra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeRendaExtra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
