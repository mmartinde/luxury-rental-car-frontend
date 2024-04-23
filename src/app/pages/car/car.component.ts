import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Cars } from '../../interfaces/cars';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent {
  car?: Cars;
  carId: string = '';
  isLoading = true;
 
  // constructor(private carService: CarsService, private route: ActivatedRoute) {
  //   this.route.params.pipe(
  //     switchMap((params: Params) => {
  //       this.carId = params['id'];
  //       return this.carService.getCarById(this.carId);
  //     })
  //   ).subscribe({
  //     next: (car) => {
  //       this.car = car as Cars;
  //       this.isLoading = false;
  //     },
  //     error: (err) => console.log('Error fetching car:', err)
  //   });
  // }
  
  constructor(private carService: CarsService, private route: ActivatedRoute) {
    this.route.params.subscribe({
      next: (res: any) => {
        this.carId = res.id;
        console.log(this.carId)
        this.carService.getCarById(this.carId).subscribe({
          next: (res) => (this.car = res as Cars, this.isLoading = false),
          error: (err) => console.log(err),
        });
      },
    })
      }

  // // ngOnInit(): void {
  // //   // this.getCar
  // // }

  // // getCar(): void {
  // //   if (id) {
  // //     this.route.paramMap.subscribe((params) => {
  // //       const id = params.get('id');
  // //       if (id) {
  // //         this.carService.getCarById(id).subscribe({
  // //           next: (res) => (this.car = res as Cars ),
  //                   this.isLoading = false
  // //           error: (err) => console.log('No se ha encontrado el vehículo'),
  // //         });
  // //       }
  // //     });
  // //   }
  // // }
}
