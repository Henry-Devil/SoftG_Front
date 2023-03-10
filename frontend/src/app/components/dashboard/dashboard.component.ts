import { Component, OnInit } from '@angular/core';
import { DriversService } from '../services/driver.service';
import { VehiclesService } from '../services/vehicle.service';
import { RoutesService } from '../services/route.services';
import { SchedulesService } from '../services/schedule.service';
import { Driver } from '../../interfaces/drivers';
import { Vehicle } from '../../interfaces/vehicle';
import { Route } from '../../interfaces/routes';
import { Schedule } from '../../interfaces/schedules';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  drivers: Driver[] = [];
  vehicles: Vehicle[] = [];
  routes: Route[] = [];
  schedules: Schedule[] = [];

  constructor(
    private driverService: DriversService,
    private vehicleService: VehiclesService,
    private routeService: RoutesService,
    private scheduleService: SchedulesService
  ) { }

  ngOnInit(): void {
    this.getDrivers();
    this.getVehicles();
    this.getRoutes();
    this.getSchedules();
  }

  getDrivers(): void {
    this.driverService.getDrivers().subscribe(drivers => this.drivers = drivers);
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  getRoutes(): void {
    this.routeService.getRoutes().subscribe(routes => this.routes = routes);
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
  }
}
