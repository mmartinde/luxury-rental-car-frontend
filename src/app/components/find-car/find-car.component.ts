import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cars } from '../../interfaces/cars';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { __values } from 'tslib';
import { LoginFormComponent } from '../forms/login-form/login-form.component';

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
    car : new FormControl('', [Validators.required]),
    transmission: new FormControl(''),
    power: new FormControl(''),
    year: new FormControl('')
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

  searcherCar(){
    const carFilterCar = this.searcherCars.get('car')?.value
    const carFilterTransmision = this.searcherCars.get('transmission')?.value
    const carFilterPower = this.searcherCars.get('power')?.value
    const carFilteryear = this.searcherCars.get('year')?.value

    if(carFilterCar || carFilterTransmision){
      this.carsFiltered = this.cars.filter((i)=>i.make.toLocaleLowerCase().includes(carFilterCar))
      
      if(carFilterTransmision === 'Automatic' || 'Manual'){
        this.carsFiltered = this.cars.filter((i)=>i.transmission.includes(carFilterTransmision))
        console.log('Este es el coche filtrado por transmission', this.carsFiltered);
      }else(carFilterTransmision === 'select');{
        this.carsFiltered
        console.log('No hay transmisión seleccionada');
        
      }

    }

  }


  searchCar(){
    const carFilter = this.searcherCars.get('car')?.value
    console.log('Coche filtrado', carFilter)
    this.carsFiltered = this.cars.filter((i)=>i.make.toLocaleLowerCase().includes(carFilter))
    console.log('Este es el coche filtrado',this.carsFiltered);
      
  }
   searchCarTransmission(){
    const carFilter  = this.searcherCars.get('transmission')?.value
    console.log('Coche filtrado por transmisión automatica', carFilter);
      if(carFilter === 'Automatic' || 'Manual'){
        this.carsFiltered = this.cars.filter((i)=>i.transmission.includes(carFilter))
        console.log('Este es el coche filtrado por transmission', this.carsFiltered);
      }else(carFilter === 'select');{
        this.carsFiltered
        console.log('No hay transmisión seleccionada');
        
      }
    
  } 

  searchCarPower(){
    const carFilter = this.searcherCars.get('power')?.value
    console.log('Coche filtrado por potencia', carFilter);
      if(carFilter === 'descendant'){
        this.carsFiltered= this.cars.sort((a,b)=>b.hp - a.hp);
      console.log('Este es el orden desdendente', this.carsFiltered);
      }else if(carFilter === 'ascendant'){
        this.carsFiltered = this.cars.sort((a,b)=>a.hp - b.hp);
        console.log('Este es el orden ascendente', this.carsFiltered);
      }else(carFilter === 'select');{
        this.carsFiltered
        console.log('No hay potencia seleccionada');
        
      }
  }
  searchCarYear(){
    const carFilter = this.searcherCars.get('year')?.value
    console.log('coche filtrado por año', carFilter);
    if(carFilter === 'newerFirst'){
      this.carsFiltered = this.cars.sort((a,b)=>b.year -a.year)
      console.log('Este es el orden desdendente', this.carsFiltered);
    }else{
      this.carsFiltered = this.cars.sort((a,b)=> a.year - b.year)
      console.log('Este es el orden ascendente', this.carsFiltered);
    }
    
  }
}
