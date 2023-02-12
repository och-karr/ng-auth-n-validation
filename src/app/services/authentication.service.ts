import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthModel} from "../models/auth.model";
import {AuthDataModel} from "../models/auth-data.model";

@Injectable()
export class AuthenticationService {
  constructor(private _httpClient: HttpClient) {
  }

  login(data: AuthModel<AuthDataModel>): Observable<AuthDataModel> {
    return this._httpClient.post<AuthDataModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data );
  }

  register(data: Object): Observable<AuthDataModel> {
    return this._httpClient.post<AuthDataModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/register', JSON.stringify(data) );
  }
}
