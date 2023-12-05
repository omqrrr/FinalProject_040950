import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topalbum } from '../Model/topalbums';

@Injectable({
  providedIn: 'root'
})
export class TopalbumService {
  API_URL="http://localhost:3000/api/topalbums";
  topalbums: Topalbum[] | undefined;
  constructor(private http:HttpClient) { }

  getTopalbum(){
    return this.http.get<Topalbum[]>(this.API_URL);
  }
}
