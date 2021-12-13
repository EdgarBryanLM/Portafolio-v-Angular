import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSocialesComponent } from './proyectos-sociales.component';

describe('ProyectosSocialesComponent', () => {
  let component: ProyectosSocialesComponent;
  let fixture: ComponentFixture<ProyectosSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
