import { Injectable } from '@angular/core';
import { Driver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private drivers: Driver[] = [];

  constructor() { }

  addDriver(driver: Driver) {
    this.drivers.push(driver);
  }

  getDrivers() {
    return this.drivers;
  }

  deleteDriver(id: number) {
    this.drivers = this.drivers.filter(driver => driver.id !== id);
  }
}
