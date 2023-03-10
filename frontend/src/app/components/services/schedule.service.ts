import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, scheduled } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Schedule } from '../../interfaces/schedules';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private myAppUrl: string;
  private myApiUrl: string;

constructor(private http: HttpClient) {
  this.myAppUrl = environment.endpoint;
  this.myApiUrl = 'api/schedules/'
}

getSchedules(): Observable<Schedule[]> {
  return this.http.get<Schedule[]>(this.myApiUrl);
}

getSchedule(id: number): Observable<Schedule> {
  const url = `${this.myApiUrl}/${id}`;
  return this.http.get<Schedule>(url);
}

addSchedule(schedule: Schedule): Observable<Schedule> {
  return this.http.post<Schedule>(this.myApiUrl, schedule);
}

updateSchedule(schedule: Schedule): Observable<any> {
  const url = `${this.myApiUrl}/${schedule.id}`;
  return this.http.put(url, schedule);
}

deleteSchedule(id: number): Observable<any> {
  const url = `${this.myApiUrl}/${id}`;
  return this.http.delete(url);
}
}
