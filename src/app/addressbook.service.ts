import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  constructor(private http:HttpClient) { }

  addAddressbookangular(addressbookangular: any){
    return this.http.post("http://localhost:8080/addressbook/add", addressbookangular);
  }

  getAddressbookangular(){
    return this.http.get("http://localhost:8080/addressbook/get-all");
  }

  deleteAddressBookById(id:number){
    return this.http.delete("http://localhost:8080/addressbook/delete/"+id);
  }

  updateAddressBookById(addressbookangular:any,id:number){
    return this.http.put("http://localhost:8080/addressbook/edit/"+id,addressbookangular)
  }


}
