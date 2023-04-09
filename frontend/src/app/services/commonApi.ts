import { HttpClient } from "@angular/common/http";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../models/authentication";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CommonApi {
    public baseUrl: string = "https://localhost:2000/";
    public baseApiUrl: string = this.baseUrl + "api/";
    public loginRequestUrl: string = this.baseApiUrl + "Authentication/Login/";
    public registerRequestUrl: string = this.baseApiUrl + "Authentication/NewUser/"

    constructor(private httpClient: HttpClient){}

    public loginUser(loginRequestObj: LoginRequest): Observable<LoginResponse> {
       return this.httpClient.post<LoginResponse>(this.loginRequestUrl, loginRequestObj);
    }

    public registerUser(registerRequest: RegisterRequest): Observable<RegisterResponse>{
        return this.httpClient.post<RegisterResponse>(this.registerRequestUrl, registerRequest);
    }
}