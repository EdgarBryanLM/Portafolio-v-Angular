import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  @Output() enviar: EventEmitter <string> = new EventEmitter <string>();
  captcha: string;
  validacion: string;

  constructor() {

    this.captcha='';
    this.validacion='false';
   }

  ngOnInit(): void {
  }


  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    console.log('resolved captcha with response:' + this.captcha);

    if(this.captcha!==null){
      this.validacion='correcto';
      this.enviar.emit(this.validacion);

    }

  }

}
