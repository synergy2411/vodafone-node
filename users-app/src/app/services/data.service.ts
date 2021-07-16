import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVER_URI : string = "https://vdf-users.herokuapp.com/users";

  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<User[] | undefined> {
    return this.httpClient.get(this.SERVER_URI)
      .pipe(map(response => <User[]>response['payload']))
  }

  createUser({name, email, age, isAdmin}) : Observable<User | undefined>{
    return this.httpClient.post<User>(this.SERVER_URI, {name, email, age, isAdmin})
  }

}
