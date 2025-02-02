import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private url = 'http://localhost:3000/events';

  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  deleteEvent(ID: number): Observable<any> { return this.http.delete<any>(this.url, {body: ID})}

  updateEvent(event: any): Observable<any> {return this.http.put<any>(this.url, event)}

  createMockEvents() {
    return this.http.post<any>(this.url + '/mock', {})
  }
}
