import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightListService } from '../flight-list.service';
import { Flight } from '../flightclass';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() animationFinished_2:boolean;
  @Input() button:string;
  @Input() backToSite:boolean;

  @Output() emitter= new EventEmitter<boolean>();

  form:FormGroup;
  
  constructor(private service:FlightListService) {
    this.form=new FormGroup({
      from: new FormControl('',Validators.required),
      to: new FormControl('',Validators.required),
      day: new FormControl('',Validators.required),
      month: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  finishedForm():void{
    let correcto=true;
    let fields=[['from','origen'], ['to','destino'], ['day','día'], ['month','mes'], ['year','año'], ['type','tipo de vuelo'], ['price','precio']]
    
    fields.forEach(field => {
      console.log(this.form.get(field[0]).value)
      if(this.form.get(field[0]).value==''){
        alert("El campo \""+field[1]+"\" está vacío, inserte un valor válido")
        correcto=false;
      }
        
    });
    
    if(!this.service.checkDate(this.form.get('day').value,this.form.get('month').value, this.form.get('year').value)){
      alert("Fecha errónea introduzca una fecha válida");
      correcto=false;
    }

    if(!this.service.checkPrice(this.form.get('price').value)){
      alert("Precio erróneo introduzca un precio válido");
      correcto=false;
    }
   
    if(correcto){
      if(this.service.addFlight(new Flight(this.form.get('from').value, this.form.get('to').value, this.form.get('day').value+"/"+this.form.get('month').value + "/" + this.form.get('year').value, this.form.get('type').value, parseFloat(parseFloat(this.form.get('price').value).toFixed(2))))){
        alert("Vuelo insertado correctamente");
        this.closeSite();
      }else{
        alert("No se ha podido insertar el vuelo, inténteo más tarde");
      }
    }
  }
  
  closeSite(){
    this.form.reset();
    this.emitter.emit(true);
  }

}
