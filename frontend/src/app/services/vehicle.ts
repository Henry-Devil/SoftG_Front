import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles: Vehicle[] = [];

  constructor() { }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  getVehicles() {
    return this.vehicles;
  }

  deleteVehicle(id: number) {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
  }
}