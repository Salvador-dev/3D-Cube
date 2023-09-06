import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  
  ngOnInit() {

    this.initCube();
    
  }

  initCube(){

    const cubo = <HTMLElement> document.querySelector('.cubo')!;
    const container = <HTMLElement> document.querySelector('.container')!;
    const body = <HTMLElement> document.querySelector('.body')!;
  
    let prev = 0;
    let prev2 = 0;
    let calc = 0;
    let calc2 = 0
    let sensibility = 1.5;


    
    container.addEventListener("mousedown", (e: any) =>{

      const x = e.clientX;
      const y = e.clientY;

      // cubo.style.animation = 'none';

      container.addEventListener("mousemove", rotate);

      function rotate(e: any){

          calc = (e.clientX - x) / sensibility;
          calc2 = (e.clientY - y) / sensibility;

      
          cubo.style.transform = `rotateY(${calc + prev}deg) rotateX(${calc2 + prev2}deg)`;
      
          body.style.cursor = `grabbing`;
      
      }

      prev += calc;
      prev2 += calc2;

      
      window.addEventListener("mouseup", () => {

          container.removeEventListener("mousemove", rotate);

          body.style.cursor = `default`;
          // cubo.style.animation = 'spin 5s infinite linear';

      });
    });

    // MOBILE FUNCTIONS

    container.addEventListener("touchstart", (e: any) =>{

      const touchLocation = e.targetTouches[0];


      const x = touchLocation.pageX;
      const y = touchLocation.pageY;


      // cubo.style.animation = 'none';


      container.addEventListener("touchmove", rotate);

      function rotate(e: any){

          calc = (e.targetTouches[0].pageX - x) / sensibility;
          calc2 = (e.targetTouches[0].pageY - y) / sensibility;

      
          cubo.style.transform = `rotateY(${calc + prev}deg) rotateX(${calc2 + prev2}deg)`;
      
          body.style.cursor = `grabbing`;
      
      }

      prev += calc;
      prev2 += calc2;

      
      window.addEventListener("touchend", () => {

          container.removeEventListener("touchmove", rotate);

          body.style.cursor = `default`;
          // cubo.style.animation = 'spin 5s infinite linear';

      });
    });


  }
}
