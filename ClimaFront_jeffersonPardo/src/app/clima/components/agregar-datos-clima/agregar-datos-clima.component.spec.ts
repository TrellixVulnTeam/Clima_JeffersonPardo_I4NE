import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDatosClimaComponent } from './agregar-datos-clima.component';

describe('AgregarDatosClimaComponent', () => {
  let component: AgregarDatosClimaComponent;
  let fixture: ComponentFixture<AgregarDatosClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDatosClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDatosClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
