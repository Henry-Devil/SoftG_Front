import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


//components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VehicleRegistrationComponent } from './components/vehicle-registration/vehicle-registration.component';
import { VehicleDriverSearchComponent } from './components/vehicle-driver-search/vehicle-driver-search.component';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';
import { DriverRegistrationComponent } from './components/driver-registration/driver-registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
  { path: 'vehicle-registration', component: VehicleRegistrationComponent },
  { path: 'driver-registration', component: DriverRegistrationComponent },
  { path: 'vehicle-driver-search', component: VehicleDriverSearchComponent },
  { path: 'work-schedule', component: WorkScheduleComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
