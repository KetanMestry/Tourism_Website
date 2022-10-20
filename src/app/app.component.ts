import { Component, HostListener,OnInit } from '@angular/core';
import { Router,Event as NavigationEvent, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-website';


  element : HTMLElement;
  navBg="bg-transparent"
  navPosition="fixed-top";
  currentRoute:any;
  footerPos:string;

  constructor(private router:Router){
    this.currentRoute
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                if(event.url=="/" || event.url.includes("/#") ){
                  this.navPosition="fixed-top"
                  this.footerPos = ""

                }else{
                  this.navPosition="sticky-top"
                  this.footerPos="fixed-bottom"

                }
              }
            });
  }
  


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      this.element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > this.element.clientHeight) {
        this.navBg = "bg-light"
      } else {
        this.navBg = "bg-transparent "
      }
     
    }

  scrollToSection(section:string){
    document.getElementById(section).scrollIntoView({block:'center'});
  }

  ngOnInit(): void {
  }
  



}
