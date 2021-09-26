import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClimaService } from '../../../core/services/clima.service';

@Component({
  selector: 'app-agregar-datos-clima',
  templateUrl: './agregar-datos-clima.component.html',
  styleUrls: ['./agregar-datos-clima.component.scss']
})
export class AgregarDatosClimaComponent implements OnInit {

  formulario: FormGroup;
  @Output() $emit: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private climaService : ClimaService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formulario = this.formBuilder.group({
    //  idClima: [''],
      fecha:[Date, [Validators.required]],
      temperatura: [0, [Validators.required]],
      humedad: [0, [Validators.required]]
    
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.formulario.valid){
      const registroClima = this.formulario.value;
      this.climaService.createClimaData(registroClima)
      .subscribe((newregistroClima) => {
       // console.log(newregistroClima);
      //  this.router.navigate(['./clima/index']);
      this.$emit.emit();
      this.buildForm();
      })
      ;
    }

  }


}
