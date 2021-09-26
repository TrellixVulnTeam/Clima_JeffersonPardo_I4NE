import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ClimaService } from '../../../core/services/clima.service';

@Component({
  selector: 'app-editar-datos-clima',
  templateUrl: './editar-datos-clima.component.html',
  styleUrls: ['./editar-datos-clima.component.scss']
})
export class EditarDatosClimaComponent implements OnInit {

  formEdit: FormGroup;
  id: string;
 // @Output() $emitEdit: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private climaService : ClimaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: Params) => 
      {
        this.id = params.id;
        this.climaService.getClimaData(this.id)
        .subscribe(
          registroClima =>
          {
            this.formEdit.patchValue(
              registroClima
              /*{
              id: product.id,
              description: product.description
              } si no hacen match perfectamente*/
            );
          });
      })

  }

  private buildForm() {
    this.formEdit = this.formBuilder.group({
      idClima: [''],
      fecha:[Date, [Validators.required]],
      temperatura: [0, [Validators.required]],
      humedad: [0, [Validators.required]]
    
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.formEdit.valid){
      const registroClima = this.formEdit.value;
      this.climaService.updateClimaData(this.id,registroClima)
      .subscribe((NregistroClima) => {
        console.log(NregistroClima);
        this.router.navigate(['./clima']);
      })
      ;
    }
  //  
  }

}
