import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    // Http Headers
    baseurl = 'http://localhost:3000';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  

    
  constructor(private http: HttpClient) { }

  getAllAcounts(): Observable<Account[]>{
       return this.http.get<Account[]>(this.baseurl+'/account',this.httpOptions);
  }
  createNewCard(card){
      this.http.post(this.baseurl+'/card',card,this.httpOptions).subscribe();
  }
  getAllCards(): Observable<Card[]>{
    return this.http.get<Card[]>(this.baseurl+'/card',this.httpOptions);
  }
  Get_Specific_Card(id): Observable<Card>{
    return this.http.get<Card>(this.baseurl+'/card/'+id,this.httpOptions);
  }
  Update_Card(card,id){
     this.http.patch<Card>(this.baseurl+'/card/'+id,card,this.httpOptions).subscribe();
  }
  Delete_Card(id){
     this.http.delete(this.baseurl+'/card/'+id,this.httpOptions).subscribe();
  }
  getMoney(card,id){
     this.http.patch(this.baseurl+'/card/getmoney'+id,card,this.httpOptions).subscribe();
  }
  addmoney(card,id) {
     this.http.patch(this.baseurl+'/card/addmoney'+id,card,this.httpOptions).subscribe();
  }
  
  


}
