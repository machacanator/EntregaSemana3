import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  appbody:any;
  counter:number;
  numberOfBackgrounds:number;
  delay:number;
  backgroundImage:string;

  constructor() {
    this.counter=2; 
    this.numberOfBackgrounds=5;  /*Cambiar por el número de backgrounds que se desee mostrar*/
    this.delay=10000; /*Cambiar por el tiempo de delay entre backgrounds en milisegundos*/ 
    this.appbody={'background-image':'url("/assets/resources/background1.jpg")'};
  }

  ngOnInit(): void {
    setInterval(()=>{this.changeBackground()},this.delay);
  }

  changeBackground():void{
    
    if(this.numberOfBackgrounds>0){
      
      this.appbody={'background-image':'url("/assets/resources/background'+this.counter+'.jpg")'};
      
      if(this.counter!=this.numberOfBackgrounds)
        this.counter++;
      else  
        this.counter=1;
 
    }
    console.log(this.appbody)
  }

}
