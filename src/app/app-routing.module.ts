import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPlanningComponent } from './modules/booking/trip-planning/trip-planning.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"plantrip",
    component:TripPlanningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
