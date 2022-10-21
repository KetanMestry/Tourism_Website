import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TripRoutesService } from 'src/app/services/trip-routes.service';

@Component({
  selector: 'app-trip-planning',
  templateUrl: './trip-planning.component.html',
  styleUrls: ['./trip-planning.component.css']
})



export class TripPlanningComponent implements OnInit {

  availableRoutes: any;
  selectedRouteIndex: number = 0;
  elem: any;
  amountPerHead: number = 0;
  selectedRoutes = [];
  pickUpPoint: string;
  dropPoint: string;
  currPickUpIndex: number = -1;
  currDropIndex: number = -1;
  basePointPrice = 100;
  calculatePricePerHead: number = 0;
  selectedDate:any;
  

  constructor(private tripRouteService: TripRoutesService) { }

  ngOnInit(): void {
    //get available routes
    this.availableRoutes = this.tripRouteService.getAvailableRoutes();
  }

  //Current index of routes options
  changeSelection() {
    this.elem = document.getElementById("routeSelector");
    this.selectedRouteIndex = this.elem.value;
  }

  checkBox(event: any, point: string) {

    //Check if current checkbox value is checked
    if (event.target.checked) {
      //Add point to selected route array.
      this.selectedRoutes.push(point);
      this.calculatePricePerHead += this.basePointPrice;


      //Decide the pickup point as per selected points
      this.setPickupPoint()
      

      //Decide the drop point as per selected points
      this.setDropPoint()

    } //If point is unchecked remove it from selected route array 
    else {
      for (let index = 0; index < this.selectedRoutes.length; index++) {
        if (this.selectedRoutes[index] == point) {
          this.selectedRoutes.splice(index, 1);
          this.calculatePricePerHead -= this.basePointPrice;
        }
      }

      this.setPickupPoint()
      
      this.setDropPoint()

    }

    this.amountPerHead = this.calculatePricePerHead;

    //If no points are selected
    if (this.selectedRoutes.length == 0) {
      this.amountPerHead = 0;
    }

    //If points are reselected after removing all points
    if (this.selectedRoutes.length == 1 && this.amountPerHead == 0) {
      this.calculatePricePerHead = this.availableRoutes[this.selectedRouteIndex].routeBasePrice;
    }


  }

  //Set pickup point as per selected route
  setPickupPoint(){
    for (let i = 0; i < this.availableRoutes.length; i++) {
      for (let j = 0; j < this.availableRoutes[i].routePoints.length; j++) {
        for (let k = 0; k < this.selectedRoutes.length; k++) {
          if (this.selectedRoutes[k] == this.availableRoutes[i].routePoints[j]) {
            this.pickUpPoint = this.availableRoutes[i].routeStart;
            this.currPickUpIndex = this.availableRoutes[i]
            
            return;
          }
        }
      }
    }
  }

  //Set pickup point as per selected route
  setDropPoint(){
    for (let i = 0; i < this.availableRoutes.length; i++) {
      for (let j = 0; j < this.availableRoutes[i].routePoints.length; j++) {
        for (let k = 0; k < this.selectedRoutes.length; k++) {
          if (this.selectedRoutes[k] == this.availableRoutes[i].routePoints[j]) {
            this.dropPoint = this.availableRoutes[i].routeEnd;
            this.currDropIndex = this.availableRoutes[i]   
                   
          }
        }
      }
    }
  }

  //Get selected plan trip values from form. 
  submitTripPlan(){
    this.tripRouteService.amountPerHead = this.amountPerHead;
    this.tripRouteService.tripPlan = {
      startPoint: this.pickUpPoint,
      endPoint: this.dropPoint,
      points: this.selectedRoutes,
      date:this.selectedDate
    }
  }

}


