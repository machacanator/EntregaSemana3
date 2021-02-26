import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightListService } from '../flight-list.service';
import { Flight } from '../flightclass';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  hovered:boolean;
  button:string;
  clicked:boolean;
  animationFinished_1:boolean;
  animationFinished_2:boolean;
  backToSite:boolean;


  constructor(private service: FlightListService){
    this.noHover()
    this.clicked=false;
    this.animationFinished_1=false;
    this.animationFinished_2=false;
    this.backToSite=false;
    
  }
  ngOnInit(): void {
  }
  
  noHover():void{
    if(!this.clicked && !this.backToSite){
      this.hovered=false
      this.button=""
    }else 
      this.hovered=false;
    
  }

  hoverLeft():void{
    if(!this.clicked && !this.backToSite){
      console.log("Hover izquierdo")
      this.hovered=true
      this.button="left"
    }
  }

  hoverRight():void{
    if(!this.clicked && !this.backToSite){
      console.log("Hover derecho")
      this.hovered=true
      this.button="right"
    }
  }

  openCircle(button:string):void{
    if(!this.backToSite && !this.clicked){
      this.hovered=true;
      this.button=button;
      this.clicked=true;
      setTimeout(()=>{
          this.animationFinished_1=true;
          setTimeout(()=>this.animationFinished_2=true, 500)
      },800);
    }
  }

  

  closeCircle(close:boolean){
    if(close){
      this.backToSite=true
      this.hovered=true;
      setTimeout(()=>{
        this.animationFinished_2=false
        setTimeout(()=>{
          this.animationFinished_1=false
          setTimeout(()=>{
            this.button=""
            this.hovered=false
            this.clicked=false
            setTimeout(()=>{
              this.backToSite=false
              console.log("Back to site cerrado")
            },500)
          },1000)
        },1000)
      },1000)
    }
  }
}
