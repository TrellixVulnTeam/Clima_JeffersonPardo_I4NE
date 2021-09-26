import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDatosClimaComponent } from './editar-datos-clima.component';

describe('EditarDatosClimaComponent', () => {
  let component: EditarDatosClimaComponent;
  let fixture: ComponentFixture<EditarDatosClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDatosClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDatosClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
