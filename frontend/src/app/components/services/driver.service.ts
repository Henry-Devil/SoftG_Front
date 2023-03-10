import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../../interfaces/drivers';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
    private myAppUrl: string;
    private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/drivers/'
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.myApiUrl);
  }

  getDriver(id: number): Observable<Driver> {
    const url = `${this.myApiUrl}/${id}`;
    return this.http.get<Driver>(url);
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(this.myApiUrl, driver);
  }

  updateDriver(driver: Driver): Observable<any> {
    const url = `${this.myApiUrl}/${driver.id}`;
    return this.http.put(url, driver);
  }

  deleteDriver(id: number): Observable<any> {
    const url = `${this.myApiUrl}/${id}`;
    return this.http.delete(url);
  }
}
export { Driver };

