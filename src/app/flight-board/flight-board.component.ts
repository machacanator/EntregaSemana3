import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlightListService } from '../flight-list.service';
import { Flight } from '../flightclass';

@Component({
  selector: 'app-flight-board',
  templateUrl: './flight-board.component.html',
  styleUrls: ['./flight-board.component.scss']
})
export class FlightBoardComponent implements OnInit {
  @Input() animationFinished_2:boolean;
  @Input() button:string;
  @Input() backToSite:boolean;
  @Output() emitter= new EventEmitter<boolean>();

  constructor(private service:FlightListService) { }

  ngOnInit(): void {
  }

  getFlightList():Flight[]{
    return this.service.flightList;
  }

  closeList(){
    this.emitter.emit(true);
  }
}
