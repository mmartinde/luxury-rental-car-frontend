import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cars } from '../../interfaces/cars';
import { CarsService } from '../../services/cars.service';
import { FindCarComponent } from '../../components/find-car/find-car.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [RouterModule, FindCarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent  {
  


}
