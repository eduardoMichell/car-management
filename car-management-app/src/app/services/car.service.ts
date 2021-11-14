import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CarModel} from "../models/cars-model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost:3001/car';


  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(car: CarModel):Observable<CarModel> {
    return this.http.post<CarModel>(this.baseUrl, car).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  updateCar(car: CarModel): Observable<CarModel> {
    const url = `${this.baseUrl}/${car._id}`;
    return this.http.put<CarModel>(url, car);
  }


  read(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.baseUrl);
  }


  delete(id: string | undefined): Observable<CarModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<CarModel>(url);
  }


  readById(id: string | null): Observable<CarModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CarModel>(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('An error has occurred', true);
    return EMPTY;
  }

}
