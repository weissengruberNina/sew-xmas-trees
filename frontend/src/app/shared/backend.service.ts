import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private readonly http: HttpClient) { }
}

export enum TreeType {
  Blaufichte,
  Nordmanntanne
}

export interface ITree {
  id: number,
  type: TreeType,
  heightMeters: number,
  price: number,
  sold: boolean
}