import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Vehicle } from '../../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private myAppUrl: string;
  private myApiUrl: string;

constructor(private http: HttpClient) {
  this.myAppUrl = environment.endpoint;
  this.myApiUrl = 'api/vehicles/'
}

getVehicles(): Observable<Vehicle[]> {
  return this.http.get<Vehicle[]>(this.myApiUrl);
}

getVehicle(id: number): Observable<Vehicle> {
  const url = `${this.myApiUrl}/${id}`;
  return this.http.get<Vehicle>(url);
}

addVehicle(vehicle: Vehicle): Observable<Vehicle> {
  return this.http.post<Vehicle>(this.myApiUrl, vehicle);
}

updateVehicle(vehicle: Vehicle): Observable<any> {
  const url = `${this.myApiUrl}/${vehicle.id}`;
  return this.http.put(url, vehicle);
}

deleteVehicle(id: number): Observable<any> {
  const url = `${this.myApiUrl}/${id}`;
  return this.http.delete(url);
}
}
