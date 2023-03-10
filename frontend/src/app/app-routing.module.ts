import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriversComponent } from './components/drivers/drivers.component';


//components
import { LoginComponent } from './components/login/login.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'routes', component: RoutesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
