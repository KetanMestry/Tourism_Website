import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TripRoutesService {

  tripPlan : {
    startPoint :string,
    endPoint : string,
    points : string[],
    date:any
  }

  amountPerHead:number;

  constructor() { }

  availableRoutes = [{
    routeStart: "Chiplun",
    routeEnd:"Dapoli",
    routePoints:[
      "Khed", "Rasalgad", "Ladghad beach", "Harnai beach", "Suvarndurgh", "Fortgoa"
    ],
    routeBasePrice:300
  },
  {
    routeStart: "Chiplun",
    routeEnd:"Guhagar",
    routePoints:[
      "Dabhol (khadi)", "Hedvi", "Velneshwar", "Chandikadevi (Temple)"
    ],
    routeBasePrice:200

  },
  {
    routeStart:"Ratnagiri",
    routeEnd:"Sangameshwar",
    routePoints:[
      "Marleshwar (Temple)", "Karneshwar (Temple)", "Prachitgad (Fort)", "Bhavangad (Fort)"
    ],
    routeBasePrice:250

  }, 
  {
    routeStart:"Ratnagiri",
    routeEnd:"Ratnagiri",
    routePoints:[
      "Ganpatipule (Temple, Beach)", "Malgind (Beach)", "Jaigad (Beach, Fort)", "Aare, ware (Beach)"
    ],
    routeBasePrice:350

  }, 
  {
    routeStart: "Ratnagiri",
    routeEnd:"Rajapur",
    routePoints:[
      "Aadivre", "Dhurgpapeshwar"
    ],
    routeBasePrice:200

  }
]


  getAvailableRoutes()
  {
    return this.availableRoutes;
  }

  // setAmount(amt){
  //   this.amountPerHead.next(amt);
  // }
}
