import { Injectable } from '@angular/core';
import { Flight } from './flightclass';

@Injectable({
  providedIn: 'root'
})
export class FlightListService {
  flightList:Flight[];
  
  constructor() {
    this.flightList=[];
    let flight1=new Flight("Madrid", "Barcelona", "12/3/2021", "one-way", 120);
    let flight2=new Flight("Roma", "Bilbao", "25/3/2021", "round trip", 100.35);
    let flight3=new Flight("Barcelona", "París", "1/4/2021", "one-way", 90);
    this.flightList.push(flight1);
    this.flightList.push(flight2);
    this.flightList.push(flight3);
    console.log(this.flightList);
  }

  addFlight(flight:Flight):boolean{
    this.flightList.push(flight);
    return this.flightList.includes(flight);
  }

  checkDate(dayString:string, monthString:string, yearString:string):boolean{
    let day:number=parseInt(dayString);
    let month:number=parseInt(monthString);
    let year:number=parseInt(yearString);

    if(day<=0 || day>31) return false;
    if(month<=0 || month>12) return false;
    if(year<2021) return false;
    
    return true;
  }

  checkPrice(priceString:string):boolean{
    try{
      let price:number=parseFloat(priceString);
      if(price < 0) return false;
      if(priceString.includes(',')){
        alert('Use punto (".") para separar los números, no use la coma');
        return false;
      }
      return true;
    }catch(error){}

    return false;
  }

}
