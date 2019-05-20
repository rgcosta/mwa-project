import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetUserService {
  constructor() { }

  getCachedData(data: string){
    return JSON.parse(localStorage.getItem(data));
  }
}
