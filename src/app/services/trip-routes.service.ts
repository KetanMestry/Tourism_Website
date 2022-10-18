import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripRoutesService {

  constructor() { }

  availableRoutes = [{
    routeName: "Chiplun-Dapoli",
    routePoints:[
      "Khed", "Rasalgad", "Ladghad beach", "Harnai beach", "Suvarndurgh", "Fortgoa"
    ]
  },
  {
    routeName: "Chiplun-Guhagar",
    routePoints:[
      "Dabhol (khadi)", "Hedvi", "Velneshwar", "Chandikadevi (Temple)"
    ]
  },
  {
    routeName:"Ratnagiri-Sangameshwar",
    routePoints:[
      "Marleshwar (Temple)", "Karneshwar (Temple)", "Prachitgad (Fort)", "Bhavangad (Fort)"
    ]
  }, 
  {
    routeName:"Ratnagiri",
    routePoints:[
      "Ganpatipule (Temple, Beach)", "Malgind (Beach)", "Jaigad (Beach, Fort)", "Aare, ware (Beach)"
    ]
  }, 
  {
    routeName: "Ratnagiri-Rajapur",
    routePoints:[
      "Aadivre", "Dhurgpapeshwar"
    ]
  }
]


  getAvailableRoutes()
  {
    return this.availableRoutes;
  }
}
