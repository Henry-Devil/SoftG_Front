import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { Route } from '../../interfaces/routes';
import { Driver } from '../services/driver.service';
import { RoutesService } from '../services/route.services';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes!: Route[];
  drivers!: Driver[];
  vehicles!: Vehicle[];
  newRoute: { description: string, driver_id?: Driver, vehicle_id?: Vehicle } = { description: '', driver_id: undefined, vehicle_id: undefined };

  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes(): void {
    this.routesService.getRoutes()
      .subscribe(routes => this.routes = routes);
  }

  addRoute(formData: any) {
    let driverId: number = formData.driver_id;
    let driver: Driver | undefined = this.drivers.find(d => d.id === driverId);

    let vehicleId: number | undefined = formData.vehicle_id;
    let vehicle: Vehicle | undefined = this.vehicles.find(v => v.id === vehicleId);
  
    if (driver && vehicle) {
      const newRoute: Route = {
        id: this.routes.length + 1,
        description: formData.description,
        driver_id: driver,
        vehicle_id: vehicle
      };
      this.routes.push(newRoute);
      this.newRoute = { description: '', driver_id: undefined, vehicle_id: undefined };
    } else {
      console.log('El driver o el vehicle seleccionado no existe');
    }
  }
  
  
  deleteRoute(route: Route): void {
    this.routesService.deleteRoute(route.id)
      .subscribe(() => {
        this.routes = this.routes.filter(r => r !== route);
      });
  }

}
