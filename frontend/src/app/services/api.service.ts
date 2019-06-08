import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "./../../environments/environment";
import { map } from "rxjs/operators";
//import "rxjs/add/observable/"

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  select(table: string) {
    //return this.http.get<any>(`${environment.apiUrl}/${table}/select`);
    return this.http
      .get("https://viacep.com.br/ws/38412472/json")
      .pipe(
        map((data: any) => {
          //return data;
          console.log("degug", data);
        })
      )
      .subscribe();
  }

  insert(table: string, data) {
    this.http.post<any>(`${environment.apiUrl}/insert/${table}`, data);
  }

  update(table: string, data) {
    this.http.put<any>(`${environment.apiUrl}/update/${table}`, data);
  }

  delete(table: string, data) {
    this.http.delete<any>(`${environment.apiUrl}/delete/${table}`, data);
  }

  test() {
    console.log("PASSOU NO TESTE!");
  }
}
