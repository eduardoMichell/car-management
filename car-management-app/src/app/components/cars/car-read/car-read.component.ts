import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {CarModel} from "../../../models/cars-model";
import {CarService} from "../../../services/car.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: false }) sort: MatSort | undefined ;

  dataSource = new MatTableDataSource<String>([]);

  cars: CarModel[] = [];
  displayedColumns = ['brand', 'model', 'yearFabrication', 'price', 'color', 'action'];

  constructor(private carService: CarService,
              private currencyPipe : CurrencyPipe) { }

  ngOnInit(): void {
     // @ts-ignore
    this.dataSource.paginator = this.paginator
     // @ts-ignore
    this.dataSource.sort = this.sort;
    this.carService.read().subscribe(async cars => {
      this.cars = cars;
      this.transformCarPrices()
      // @ts-ignore
      this.dataSource.data = this.cars
    })
  }

  transformCarPrices(){
    for(const car of this.cars){
      car.price =  <string>this.currencyPipe.transform(car.price, '$');
    }
  }

}
