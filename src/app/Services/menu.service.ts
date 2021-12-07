import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dishes } from '../classes/dishes';
import { FoodUser } from '../classes/food-user';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private baseUrl: string = "http://localhost:8085"
  //private baseUrl : string = "http://192.168.1.102:8085"
  constructor(private http: HttpClient) { }

  getDishes(username: string | null, password: string | null): Observable<Dishes[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Dishes[]>(`${this.baseUrl}/menu/all`, { headers });
  }

}
