import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cars } from '../../interfaces/cars';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-find-car',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CardComponent],
  templateUrl: './find-car.component.html',
  styleUrl: './find-car.component.scss'
})
export class FindCarComponent implements OnInit {

  cars: Cars []=[]

  carsFiltered: Cars []=[]

  searcherCars: FormGroup = this.FormBuilder.group({
    car : new FormControl(null, [Validators.required])
  })

  constructor(
    private CarsService: CarsService,
    private FormBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.CarsService.getAllCars().subscribe({
      next:(res:any)=>{
        this.cars=res as Cars[]
        console.log("Coches Cargados", this.cars);
      },
      error: (err:any)=> console.log('Error al cargar vehiculos')
      
    })
  }
  searchCar(){
    const carFilter = this.searcherCars.get('car')?.value
    console.log('Coche filtrado', carFilter)
    this.carsFiltered = this.cars.filter((i)=>i.make.toLocaleLowerCase().includes(carFilter))
    console.log('Este es el coche filtrado',this.carsFiltered);
    
    
  }

  

}
