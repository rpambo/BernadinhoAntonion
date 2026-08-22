import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P7Existe } from './p7-existe';

describe('P7Existe', () => {
  let component: P7Existe;
  let fixture: ComponentFixture<P7Existe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P7Existe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P7Existe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
