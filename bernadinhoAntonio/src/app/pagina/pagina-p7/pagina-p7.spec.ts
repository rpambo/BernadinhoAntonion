import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaP7 } from './pagina-p7';

describe('PaginaP7', () => {
  let component: PaginaP7;
  let fixture: ComponentFixture<PaginaP7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaP7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaP7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
