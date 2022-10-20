import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlanningComponent } from './trip-planning/trip-planning.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TripPlanningComponent,
    BookingInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    TripPlanningComponent,
    BookingInfoComponent,
  ]
})
export class BookingModule { }
