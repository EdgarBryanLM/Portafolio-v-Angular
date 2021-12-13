import { Component, OnInit } from '@angular/core';
interface habilidades{
  lenguaje: string,
  imagen: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   /* Habilidades: habilidades[]; */
   intervalo:any;
   numero=1;
   skills: habilidades[] =[
     {
       lenguaje: 'TypeScript',
       imagen: 'TypeScript'
     },
     {
       lenguaje: 'JavaScript',
       imagen: 'JavaScript'
     },
     {
       lenguaje: 'Angular',
       imagen: 'Angular'
     },
     {
       lenguaje: 'Ionic',
       imagen: 'Ionic'
     },
     {
       lenguaje: 'PHP',
       imagen: 'PHP'
     },
     {
       lenguaje: 'C#',
       imagen: 'C'
     },
     {
       lenguaje: 'Java',
       imagen: 'Java'
     },
     {
       lenguaje: 'Bootstrap',
       imagen: 'Bootstrap'
     },
     {
       lenguaje: 'HTML5',
       imagen: 'HTML5'
     },
     {
       lenguaje: 'CSS',
       imagen: 'CSS'
     },



   ];



 constructor(){

 }


async ngOnInit(){


 this.start(this.numero);


}

async stop(){
/*   carrusel.addEventListener('mouseover', () => {
   console.log('hola');


 }); */

 clearInterval(this.intervalo);
/*  carrusel.addEventListener('mouseout', () => {
  this.start();
 }); */
}


async start( avance:number){



 let step=1;
 const carrusel = await <HTMLElement>document.querySelector('.items');
 let maxScrollLert=carrusel.scrollWidth - carrusel.clientWidth;


  carrusel.scrollLeft= carrusel.scrollLeft+ step+avance;



  this.intervalo=setInterval(  function  (){


           carrusel.scrollLeft= carrusel.scrollLeft+ step;

           if(carrusel.scrollLeft === maxScrollLert){
               step=step *-1;


           } else if (carrusel.scrollLeft ===0){
             step=step *-1;


           }
         },10);



}

avance(){
  this.stop();
  this.start(802);
}

atras(){
 this.stop();
 this.start(-802);
}
}
