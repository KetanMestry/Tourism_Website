import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripRoutesService {

  constructor() { }

  availableRoutes = [{
    routeStart: "Chiplun",
    routeEnd:"Dapoli",
    routePoints:[
      "Khed", "Rasalgad", "Ladghad beach", "Harnai beach", "Suvarndurgh", "Fortgoa"
    ],
  },
  {
    routeStart: "Chiplun",
    routeEnd:"Guhagar",
    routePoints:[
      "Dabhol (khadi)", "Hedvi", "Velneshwar", "Chandikadevi (Temple)"
    ],

  },
  {
    routeStart:"Ratnagiri",
    routeEnd:"Sangameshwar",
    routePoints:[
      "Marleshwar (Temple)", "Karneshwar (Temple)", "Prachitgad (Fort)", "Bhavangad (Fort)"
    ],

  }, 
  {
    routeStart:"Ratnagiri",
    routeEnd:"Ratnagiri",
    routePoints:[
      "Ganpatipule (Temple, Beach)", "Malgind (Beach)", "Jaigad (Beach, Fort)", "Aare, ware (Beach)"
    ],

  }, 
  {
    routeStart: "Ratnagiri",
    routeEnd:"Rajapur",
    routePoints:[
      "Aadivre", "Dhurgpapeshwar"
    ],

  }
]

  


  getAvailableRoutes()
  {
    return this.availableRoutes;
  }
}
