import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetUserService {
  constructor() { }

  getCachedData(label: string){
    return JSON.parse(localStorage.getItem(label));
  }
  setCachedData(label: string, obj: any){
    localStorage.setItem(label, obj);
  }
}
