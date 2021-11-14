import {Component, OnInit} from '@angular/core';
import {CarModel} from "../../../models/cars-model";
import {CarService} from "../../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private router: Router,
              private currencyPipe : CurrencyPipe) {
  }

  car: CarModel = {
    brand: "", model: "", price: "", color: "", yearFabrication: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.readById(id).subscribe((car) => {
      this.car = car
      this.car.price = <string>this.currencyPipe.transform(this.car.price, '$');
    })
  }

  deleteCar(): void {
    this.carService.delete(this.car._id).subscribe(() => {
      this.carService.showMessage('Car Deleted');
      this.router.navigate(['/']);
    })
  }


  cancel(): void {
    this.router.navigate(['/']);
  }


}
