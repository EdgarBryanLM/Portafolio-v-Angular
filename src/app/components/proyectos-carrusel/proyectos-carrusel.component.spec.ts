import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCarruselComponent } from './proyectos-carrusel.component';

describe('ProyectosCarruselComponent', () => {
  let component: ProyectosCarruselComponent;
  let fixture: ComponentFixture<ProyectosCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
