import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVidaComponent } from './jogo-da-vida.component';

describe('JogoDaVidaComponent', () => {
  let component: JogoDaVidaComponent;
  let fixture: ComponentFixture<JogoDaVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDaVidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoDaVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
