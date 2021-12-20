import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

const BASE_URL: string = 'http://localhost:8080/tree'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private readonly http: HttpClient) { }

  public getAllTreeTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/types`);
  }
}

export interface ITree {
  id: number,
  type: string,
  heightMeters: number,
  price: number,
  sold: boolean
}