import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestService {

  header = new Headers();
  public setHeader: any;

  //Dummy data
  public users: User[] = [
    new User('John', 'Doodle', 'john.doodle@gmail.com', '../../assets/land.png', [''], [''], [''], false),
    new User('Carl', 'Ross', 'carl.ross@gmail.com', '../../assets/land.png', [''], [''], [''], true)
  ]
  
  
  constructor(private http: HttpClient) {
    this.header.append('Content-Type', 'application/json');
    this.setHeader = {headers: this.header};
  }

  // Will receive a observable, must .subscribe()
  getData(url: string){

    return this.http.get(url, this.setHeader);
  }
  postData(url: string, params: any){
    return this.http.post(url, this.setHeader);
  }
  updateData(url: string, params: any){
    return this.http.put(url, this.setHeader);
  }
  deleteData(url: string, params: any){
    return this.http.delete(url, this.setHeader);
  }

  // Dummy - return local data as an Observable
  getDataLocal(){
    const usersObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.users[1]);
      }, 0);
    });

    return usersObservable;
  }

}
