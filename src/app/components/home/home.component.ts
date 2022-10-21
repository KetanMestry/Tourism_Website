import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TripRoutesService } from 'src/app/services/trip-routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Arrays for plans
  singlePlanArr = ['Food','Stay','Guide','Personal pictures'];

  familyPlanArr = ['Customizable trip']
  
  groupPlanArr = ['Customizable food','Group party' ]

  //Contactus Form
  usrName:string;
  usrEmail:string;
  usrNum:number;
  usrMsg:string;

  contactUsForm(formvalue:NgForm){
    console.log(formvalue.value)
  }

  constructor(private testObj:TripRoutesService) { }

  ngOnInit(): void {
  }

 

}
