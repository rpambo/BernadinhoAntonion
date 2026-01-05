import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoYoutube } from './secao-youtube';

describe('SecaoYoutube', () => {
  let component: SecaoYoutube;
  let fixture: ComponentFixture<SecaoYoutube>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoYoutube]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoYoutube);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
