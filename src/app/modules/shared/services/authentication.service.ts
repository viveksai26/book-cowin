import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApplicationUrl } from "../constants/application-url";


@Injectable({ providedIn: 'root'})
export class AuthenticationService {
    constructor(private http: HttpClient) {}
    generateOTP(mobileNumber: any): any {
        return this.http.post(ApplicationUrl.generateOTP, mobileNumber)
    }

    generateToken(TokenObject: any): any {
        return this.http.post(ApplicationUrl.generateToken, TokenObject);
    }
}