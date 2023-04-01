import { HttpClient } from "@angular/common/http";
import { LoginRequest, LoginResponse } from "../models/authentication";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CommonApi {
    public baseUrl: string = "https://localhost:2000/";
    public baseApiUrl: string = this.baseUrl + "api/";
    public loginRequestUrl: string = this.baseApiUrl + "Authentication/Login/"

    constructor(private httpClient: HttpClient){}

    public loginUser(loginRequest: LoginRequest): Observable<LoginResponse> {
       return this.httpClient.post<LoginResponse>(this.loginRequestUrl, loginRequest);
    }
}