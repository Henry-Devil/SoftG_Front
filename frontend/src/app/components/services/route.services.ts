import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '../../interfaces/routes';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private myAppUrl: string;
  private myApiUrl: string;

constructor(private http: HttpClient) {
  this.myAppUrl = environment.endpoint;
  this.myApiUrl = 'api/routes/'
}

getRoutes(): Observable<Route[]> {
  return this.http.get<Route[]>(this.myApiUrl);
}

getRoute(id: number): Observable<Route> {
  const url = `${this.myApiUrl}/${id}`;
  return this.http.get<Route>(url);
}

addRoute(route: Route): Observable<Route> {
  return this.http.post<Route>(this.myApiUrl, route);
}

updateRoute(route: Route): Observable<any> {
  const url = `${this.myApiUrl}/${route.id}`;
  return this.http.put(url, route);
}

deleteRoute(id: number): Observable<any> {
  const url = `${this.myApiUrl}/${id}`;
  return this.http.delete(url);
}
}
