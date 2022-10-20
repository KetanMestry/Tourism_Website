import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlanningComponent } from './trip-planning/trip-planning.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TripPlanningComponent,
    BookingInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TripPlanningComponent,
    BookingInfoComponent,
  ]
})
export class BookingModule { }
