import { AbstractControl } from '@angular/forms'

export class MyValidators {

   static validacionTemperatura (control: AbstractControl) {
        const value = control.value;
       // console.log(value);
        if(value > 100 || value < -100){
            return {temperatura_invalido: true}
        }
        return null;
    }

    static validacionHumedad (control: AbstractControl) {
        const value = control.value;
       // console.log(value);
        if(value > 100 || value < 0){
            return {Humedad_invalido: true}
        }
        return null;
    }

    static validacionContrasena (control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if(value.length < 7){
            return {contrasena_invalida: true}
        }
        return null;
    }
}