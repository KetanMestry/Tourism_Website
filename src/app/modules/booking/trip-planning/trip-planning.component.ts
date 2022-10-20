import { Component, OnInit } from '@angular/core';
import { TripRoutesService } from 'src/app/services/trip-routes.service';



@Component({
  selector: 'app-trip-planning',
  templateUrl: './trip-planning.component.html',
  styleUrls: ['./trip-planning.component.css']
})



export class TripPlanningComponent implements OnInit {



  availableRoutes: any;
  selectedRouteIndex: number;
  el: any;
  amountPerHead: number = 0;
  selectedRoutes = [];

  constructor(private tripRouteService: TripRoutesService) { }

  ngOnInit(): void {
    this.availableRoutes = this.tripRouteService.getAvailableRoutes();
    this.selectedRouteIndex = 0;


  }

  changeSelection() {
    this.el = document.getElementById("routeSelector");
    this.selectedRouteIndex = this.el.value;
  }

  checkBox(event: any, point: string) {
    if (event.target.checked) {
      this.selectedRoutes.push(point);

    } else {
      for (let index = 0; index < this.selectedRoutes.length; index++) {
        if (this.selectedRoutes[index] == point) {
          this.selectedRoutes.splice(index, 1);
        }

      }
    }
  }




}


