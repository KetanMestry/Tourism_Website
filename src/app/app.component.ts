import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-website';


  element : HTMLElement;
  bgClass="bg-transparent"

  planSection = "planSection"


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      this.element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > this.element.clientHeight) {
        this.bgClass = "bg-light"
      } else {
        this.bgClass = "bg-transparent"
      }
    }

  scrollToSection(){
    document.getElementById("plan").scrollIntoView();
  }

  



}
