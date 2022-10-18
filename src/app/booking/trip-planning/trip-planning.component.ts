import { Component, OnInit } from '@angular/core';
import { TripRoutesService } from 'src/app/services/trip-routes.service';


@Component({
  selector: 'app-trip-planning',
  templateUrl: './trip-planning.component.html',
  styleUrls: ['./trip-planning.component.css']
})
export class TripPlanningComponent implements OnInit {

  availableRoutes : any;
  selectedRouteIndex:number;
  el:any;

  constructor(private tripRouteService:TripRoutesService) { }

  ngOnInit(): void {
    this.availableRoutes = this.tripRouteService.getAvailableRoutes();
    this.selectedRouteIndex = 0;

  }

  changeSelection()
  {
    this.el = document.getElementById("routeSelector");
    this.selectedRouteIndex = this.el.value;
    console.log(this.selectedRouteIndex)
  }

}
