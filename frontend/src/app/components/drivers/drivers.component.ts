import { Component, OnInit } from '@angular/core';
import { Driver } from '../../interfaces/drivers'
import { DriversService } from '../services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers!: Driver[];

  constructor(
    private driversService: DriversService
  ) { }

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers(): void {
    this.driversService.getDrivers()
      .subscribe(drivers => this.drivers = drivers);
  }

  addDriver(first_name: string): void {
    first_name = first_name.trim();
    if (!first_name) { return; }
    this.driversService.addDriver({ first_name } as unknown as Driver)
      .subscribe(driver => {
        this.drivers.push(driver);
      });
  }

  deleteDriver(driver: Driver): void {
    this.drivers = this.drivers.filter(d => d !== driver);
    this.driversService.deleteDriver(driver.id).subscribe();
  }

}
