import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {AuthDataModel} from "../models/auth-data.model";
import {AuthModel} from "../models/auth.model";

@Injectable()
export class AuthenticationService {
  constructor(private _httpClient: HttpClient) {
  }

  login(data: AuthModel<AuthDataModel>): Observable<AuthDataModel> {
    return this._httpClient.post<AuthDataModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data );
  }

  register(data: AuthModel<AuthDataModel>): Observable<AuthDataModel> {
    return this._httpClient.post<AuthDataModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/register', data );
  }
}
