import {Component, OnInit} from '@angular/core';
import {CarModel} from "../../../models/cars-model";
import {CarService} from "../../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private router: Router,
              private currencyPipe: CurrencyPipe) {
  }

  car: CarModel = {
    brand: "", model: "", price: "", color: "", yearFabrication: ''
  }
  formattedAmount: any

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.readById(id).subscribe((car) => {
      this.car = car
      this.formattedAmount = this.currencyPipe.transform(this.car.price, '$');
    })
  }


  updateCar(): void {
    if (this.checkInputs(this.car)) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.carService.showMessage('Car Updated');
        this.router.navigate(['/']);
      })
    }
  }

  transformAmount(element: any) {
    this.car.price = String(this.formattedAmount.replace(/[^0-9\.-]+/g, ""));
    this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, 'R$');
    element.target.value = this.formattedAmount;
  }

  checkInputs(car: { brand: any; model: any; price: any; yearFabrication: any; }) {
    return !(this.hasWhiteSpace(car.brand) && this.hasWhiteSpace(car.model)
      && this.hasWhiteSpace(car.price)
      && this.hasWhiteSpace(car.yearFabrication))
  }

  hasWhiteSpace(s: any) {
    return /^\s+$/.test(s);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }


  changeDate(e: { target: { value: Date; }; }) {
    // @ts-ignore
    this.car.yearFabrication = e.target.value
  }


}
