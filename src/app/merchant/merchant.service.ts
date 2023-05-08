import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEURL } from '../constants';
import { Merchant } from './merchant';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }

  createMerchant(merchant:Merchant): Observable<any>{
    return this.http.post(`${BASEURL}/api/merchant/signup`, merchant)

  }
  loginMerchant(merchant:any): Observable<any>{
    return this.http.post(`${BASEURL}/api/merchant/login`, merchant)
  }
  getRequest(id: string):Observable<any>{
    return this.http.get(`${BASEURL}/api/merchant/view-request/${id}`)
  }

  updateRequest(request:any, id:string){
    return this.http.put(`${BASEURL}/api/merchant/edit-request/${id}`,request)

  }
  deleteRequest(id:string){
    return this.http.delete(`${BASEURL}/api/merchant/delete-request/${id}`)
  }

  getAllMerchant():Observable<any>{
    return this.http.get(`${BASEURL}/api/merchant`)
  }

  createService(service: Service):Observable<any>{
    return this.http.post(`${BASEURL}/api/merchant/add-service`, service)
  }

  getService(id: string):Observable<any>{
    return this.http.get(`${BASEURL}/api/merchant/view-service/${id}`)
  }

}
