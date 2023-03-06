import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'; 
import { map } from 'rxjs/operators';
import { Pipe } from '@angular/core';

interface RespondsUsers{
  results:User[];
  info:any;
}
@Injectable()
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }

  getAllUsers(results:number =5){
    return this.http.get<RespondsUsers>(`https://randomuser.me/api?results=${results}`)
    .pipe(
      map(response => response.results)
      );
  }
 
}
