import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDatosClimaComponent } from './listar-datos-clima.component';

describe('ListarDatosClimaComponent', () => {
  let component: ListarDatosClimaComponent;
  let fixture: ComponentFixture<ListarDatosClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDatosClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDatosClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
