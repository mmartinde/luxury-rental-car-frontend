import { Component } from '@angular/core';
import { CarsLayoutComponent } from '../../components/cars-layout/cars-layout.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarsLayoutComponent, CarouselComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
