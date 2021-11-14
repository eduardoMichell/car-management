import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CarCreateComponent} from "./components/cars/car-create/car-create.component";
import {CarUpdateComponent} from "./components/cars/car-update/car-update.component";
import {CarDeleteComponent} from "./components/cars/car-delete/car-delete.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CarCreateComponent
  },
  {
    path: 'update/:id',
    component: CarUpdateComponent
  },
  {
    path: 'delete/:id',
    component: CarDeleteComponent
  }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
