import { Injectable } from '@angular/core';
import { BASEURL } from '../constants';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from '../request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user:User): Observable<any>{
    return this.http.post(`${BASEURL}/api/user/signup`, user)

  }

  loginUser(user:any): Observable<any>{
    return this.http.post(`${BASEURL}/api/user/login`, user)
  }
  
  getRequest(id: string):Observable<any>{
    return this.http.get(`${BASEURL}/api/user/view-request/${id}`)
  }
  //addRequest(){}
  addRequest(request: Request):Observable<any>{
    return this.http.post(`${BASEURL}/api/user/add-request`, request)

  }
  updateUser(user: any, id: string) {
    return this.http.put(`${BASEURL}/api/user/edit-user/${id}`,user)
  }
  getUser(id:String):Observable<any>{
    return this.http.get(`${BASEURL}/api/user/get-user/${id}`)
  }

  
}
