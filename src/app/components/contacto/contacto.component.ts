import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [ConfirmationService]
})
export class ContactoComponent implements OnInit {

    validacion!: string;
    verdadero!: boolean;
    msgs: Message[] = [];

    miFormulario:FormGroup=this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.minLength(6)]],
      mensaje:['',[Validators.required,Validators.minLength(20)]]
    })

  constructor(private fb:FormBuilder,private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) {
    this.verdadero=true;
   }

   ngOnInit() {

  }

  CampoInvalido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  recibirRespuesta(mensaje: string){
        this.validacion=mensaje;
        console.log(mensaje);
        this.verdadero=false;

  }

  guardar(){
      console.log('hola');

  }



  confirm1() {
    this.confirmationService.confirm({
        message: 'Currently this service does not work, contact me through my social networks.',
        header: 'Attention',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },

    });
}


}
