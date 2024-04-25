import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/appointment"

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}/insert`, appointment);
  }
  deleteAppointment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
