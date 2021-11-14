import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Router} from "@angular/router";
import {CarModel} from "../../../models/cars-model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  constructor(private carService: CarService,
              private router: Router,
              private currencyPipe : CurrencyPipe) {
  }

  car: CarModel = {
    brand: "", model: "", price: "", color: "", yearFabrication: ''
  }
  formattedAmount: any

  ngOnInit(): void {
  }

  changeDate(e: { target: { value: Date; }; }) {
    // @ts-ignore
    this.car.yearFabrication = e.target.value
  }

  createCar(): void {
    if (this.checkInputs(this.car)){
      this.carService.create(this.car).subscribe(() => {
        this.carService.showMessage('Car Created');
        this.router.navigate(['/']);
      })
    }
  }
  transformAmount(element: any){
    this.car.price = String(this.formattedAmount.replace(/[^0-9\.-]+/g, ""));
    this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, '$');
    element.target.value = this.formattedAmount;
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  checkInputs(car: { brand: any; model: any; price: any; yearFabrication: any; }){
    return !(this.hasWhiteSpace(car.brand) && this.hasWhiteSpace(car.model)
      && this.hasWhiteSpace(car.price)
      && this.hasWhiteSpace(car.yearFabrication))
  }

  hasWhiteSpace(s: any) {
    return /^\s+$/.test(s);
  }

}
