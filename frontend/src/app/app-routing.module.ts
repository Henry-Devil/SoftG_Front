import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { PagePComponent } from './components/page-principal/page-principal.component';

//components
import { LoginComponent } from './components/login/login.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { AuthGuard } from './utils/auth.guards';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'principal', component: PagePComponent, canActivate: [AuthGuard]},
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
