import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  planSection = "planSection"

  //Arrays for plans
  singlePlanArr = ['Food','Stay','Guide','Personal pictures'];

  familyPlanArr = ['Customizable trip']
  
  groupPlanArr = ['Customizable food','Group party' ]

  @Output()
  targetSection:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
