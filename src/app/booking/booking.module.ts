import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlanningComponent } from './trip-planning/trip-planning.component';



@NgModule({
  declarations: [
    TripPlanningComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TripPlanningComponent
  ]
})
export class BookingModule { }
