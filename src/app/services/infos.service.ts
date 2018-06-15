import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  
  constructor(private http: HttpClient) { }

  getInfos(){
    return this.http.get('https://api.github.com/users/nartawak');
  }

}
