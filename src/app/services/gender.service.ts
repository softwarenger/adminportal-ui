import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gender } from '../models/api-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseApiUrl= 'https://localhost:44331';

  constructor(private httpcliet:HttpClient) { }

  getGenderList():Observable<gender[]>{
    return this.httpcliet.get<gender[]>(this.baseApiUrl+'/genders');
  }
}
