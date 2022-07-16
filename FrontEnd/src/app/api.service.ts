import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>("http://localhost:4201/api/heroes");
  }

  evolveHero(): Observable<IHero[]> {
    const headers = { 'content-type': 'application/json'};
    return this.http.post<IHero[]>("http://localhost:4201/api/heroes", '"evolve"', {"headers":headers});
  }

}
export interface IHero { 
  name: string, 
  power: string, 
  stats: [
    { key: string, value: number }, 
    { key: string, value: number }, 
    { key: string, value: number }] 
  }