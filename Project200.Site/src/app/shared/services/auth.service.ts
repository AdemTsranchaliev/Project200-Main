
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/app/enviorment';
import { UserRegisterModel } from '../models/AuthModels/UserRegisterModel';
import { UserLoginModel } from '../models/AuthModels/UserLoginModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _authChangeSub = new BehaviorSubject<boolean>(false)
    public authChanged = this._authChangeSub.asObservable();

    constructor(private _http: HttpClient, private _jwtHelper: JwtHelperService) { }

    public registerUser = (route: string, body: UserRegisterModel) => {
        return this._http.post<any>(this.createCompleteRoute(route, environment.ResourceServer.Endpoint), body);
    }

    public loginUser = (route: string, body: UserLoginModel) => {        
        return this._http.post<any>(this.createCompleteRoute(route, environment.ResourceServer.Endpoint), body);
    }

    public logout = () => {
        localStorage.removeItem("token");
        this.sendAuthStateChangeNotification(false);
    }

    // public forgotPassword = (route: string, body: ForgottenPasswordDto) => {
    //     return this._http.post(this.createCompleteRoute(route, this._envUrl.resourceServerUrl), body);
    // }

    // public resetPassword = (route: string, body: ResetPasswordDto) => {
    //     return this._http.post(this.createCompleteRoute(route, this._envUrl.resourceServerUrl), body);
    // }

    // public changePassword = (route: string, body: ChangePasswordDto) => {
    //     return this._http.post(this.createCompleteRoute(route, this._envUrl.resourceServerUrl), body);
    // }

    // public confirmEmail = (route: string, token: string, email: string) => {
    //     let params = new HttpParams({ encoder: new CustomEncoder() })
    //     params = params.append('token', token);
    //     params = params.append('email', email);
    //     return this._http.get(this.createCompleteRoute(route, this._envUrl.resourceServerUrl), { params: params });
    // }

    public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
        this._authChangeSub.next(isAuthenticated);
    }

    public isUserAuthenticated = () => {
        let token = localStorage.getItem("token")!;

        if(token){
            return token && !this._jwtHelper.isTokenExpired(token);
        }

        return false;
    }

    public isEvaluator = (): boolean => {
        const role = this.getRoleClaim();
        return role === 'Evaluator';
    }

    public isExternalEvaluator = (): boolean => {
        const role = this.getRoleClaim();
        return role === 'ExternalEvaluator';
    }

    private getRoleClaim() {
        let token = localStorage.getItem("token");
        const decodedToken = this._jwtHelper.decodeToken(token!);
        return decodedToken['role'];
    }
    
    public getId() {
        let token = localStorage.getItem("token");
        const decodedToken = this._jwtHelper.decodeToken(token!);
        return decodedToken['userid'];
    }

    private createCompleteRoute = (route: string, envAddress: string) => {
        return `${envAddress}/${route}`;
    }
}