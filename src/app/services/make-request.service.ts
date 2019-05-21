import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestService {

  // header = new Headers();
  // public setHeader: any; 
  
  constructor(private http: HttpClient) {
    // this.header.append('Content-Type', 'application/json');
    // this.setHeader = {headers: this.header};
  }

  getData(url: string, params?: any){
    if(params) return this.http.get(url, params);
    return this.http.get(url);
  }
  postData(url: string, params: any){
    return this.http.post(url, params);
  }
  updateData(url: string, params: any){
    return this.http.put(url, params);
  }
  deleteData(url: string, params: any){
    return this.http.delete(url, params);
  }
  getCachedData(item: string){
    return JSON.parse(localStorage.getItem(item));
  }

  handleError(error: any){

    let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
