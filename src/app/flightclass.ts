export class Flight{
    id:string;
    from:string;
    to:string;
    date:string;
    flightType:string;
    price:number;

    constructor(from:string, to:string, date:string, flightType:string, price:number){
        this.from = from;
        this.to = to;
        this.date = date;
        this.flightType = flightType;
        this.price = price;

        this.id="";

        for(let i=0; i<4;i++){
            this.id+=String.fromCharCode(Math.random()*26+65)
            this.id+=String.fromCharCode(Math.random()*10+48)
        }
    }
}