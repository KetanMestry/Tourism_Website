import { Component, OnInit } from '@angular/core';
import { TripRoutesService } from 'src/app/services/trip-routes.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})


export class BookingInfoComponent  {

  totalNum:number = 1;
  userName:string;

  constructor(public tripRouteService: TripRoutesService ) {
   
  }


  ngOnInit(): void {
    
  }

}
