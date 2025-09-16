import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  apiUrl = "http://localhost:3000/clients";

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Clients[]>{
    return this.http.get<Clients[]>(this.apiUrl);
  }

  save(clients: Clients): Observable<Clients>{
    return this.http.post<Clients>(this.apiUrl, clients);
  }

}
