import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoriaParaGestores } from './mentoria-para-gestores';

describe('MentoriaParaGestores', () => {
  let component: MentoriaParaGestores;
  let fixture: ComponentFixture<MentoriaParaGestores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoriaParaGestores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoriaParaGestores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
