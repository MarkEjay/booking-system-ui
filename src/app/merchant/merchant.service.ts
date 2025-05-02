import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dA } from '@fullcalendar/core/internal-common';
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
  getOneService(id:string):Observable<any>{
    return this.http.get(`${BASEURL}/api/merchant/get-one-service/${id}`)
  }

  deleteService(id:string){

    return this.http.delete(`${BASEURL}/api/merchant/delete-service/${id}`)
  }
  editService(service:any, id:string){
    return this.http.put(`${BASEURL}/api/merchant/edit-service/${id}`,service)
  }

  updateMerchant(merchant:any, id:string){
    return this.http.put(`${BASEURL}/api/merchant/edit-merchant/${id}`,merchant)

  }
  
  getMerchant(id:String):Observable<any>{
    return this.http.get(`${BASEURL}/api/merchant/get-merchant/${id}`)
  }
  getByMerchantId(merchantid: string): Observable<any> {
    return this.http.get(`${BASEURL}/api/merchant/get-merchantid/${merchantid}`);
}
  addAvailability(merchant:any){
    return this.http.post(`${BASEURL}/api/merchant/add-availability`,merchant)

  }
  getAvailability(id:string){
    return this.http.get(`${BASEURL}/api/merchant/view-availability/${id}`)

  }
  deleteAvailability(merchantId:any,date:any,time:any):Observable<any>{
    const options = {
      body: { date, time }
  };
    return this.http.delete(`${BASEURL}/api/merchant/delete-availability/${merchantId}`, options)

  }




}
