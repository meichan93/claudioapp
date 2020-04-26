import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  token: string;
  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem("tokenId")
  }

  listarPersonas() {
    return this.http.get(environment.apiPath + "personas", {
      headers: {
        "authorization": "Bearer "+ this.token
      }
    });
  }
}
