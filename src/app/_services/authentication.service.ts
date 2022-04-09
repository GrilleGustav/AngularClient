import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { lastValueFrom, map, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomEncoder } from '../_helper/custom-encoder';
import { RefreshTokenRequestModel } from '../_models/settings/user/request/refreshTokenRequest.model';
import { RevokeTokenRequestModel } from '../_models/settings/user/request/revokeTokenRequest.model';
import { EmialConfirmLinkRequestModel } from '../_models/user/authentication/emailConfirmLinkRequest.model';
import { ForgotPasswordModel } from '../_models/user/authentication/forgotPassword.model';
import { ResetPasswordModel } from '../_models/user/authentication/resetPassword.model';
import { TokenResponseModel } from '../_models/user/authentication/tokenResponse.model';
import { TwoFactorModel } from '../_models/user/authentication/twoFactor.model';
import { UserAuthenticationRequestModel } from '../_models/user/authentication/userAuthenticationRequest.model';
import { UserAuthenticationResponseModel } from '../_models/user/authentication/userAuthenticationResponse.model';
import { UserRegistrationRequestModel } from '../_models/user/authentication/userRegistrationRequest.model';
import { ErrorResponse } from '../_models/user/errorResponse.model';

/**
 * Service for providing user authentication.
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private _authChangeSub = new Subject<boolean>();
  private refreshtokenTimeout: any;
  public authChanged = this._authChangeSub.asObservable();

  /**
 * Service for providing user authentication.
 * @param _http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
 * @param _jwtHelper Helper service for handling token.
 * @param _router A service that provides navigation among views and URL manipulation capabilities.
 */
  constructor(private _http: HttpClient, private _jwtHelper: JwtHelperService, private _router: Router) { }

  /**
    * Register application user.
    * @param body User registration request data.
    * @returns Response containing flag indicating user was registered.
    */
  registerUser(body: UserRegistrationRequestModel): Promise<ErrorResponse> {
    return lastValueFrom(this._http.post<ErrorResponse>(`${environment.apiUrl}/Accounts/RegisterUser`, body));
  }

  /**
   * Login application user.
   * @param body User Authentication response.
   * @returns User authentication request with flag indicating authentication was successful.
   * Also contains the access token refresh token etc.
   * If authentication fails containing some backend errors.
   */
  loginUser(body: UserAuthenticationRequestModel): Promise<UserAuthenticationResponseModel> {
    return lastValueFrom(this._http.post<UserAuthenticationResponseModel>(`${environment.apiUrl}/Accounts/Login`, body, { withCredentials: true }));
  }
  public sendAuthStateChangeNotification(isAuthenticated: boolean) {
    this._authChangeSub.next(isAuthenticated);
  }

  /**
   * Logout application user.
   */
  public logout() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken != null) {
      let request = {} as RevokeTokenRequestModel;
      request.token = refreshToken;
      this._http.post<any>(`${environment.apiUrl}/User/RevokeToken`, request, { withCredentials: true }).subscribe();
    }

    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this.sendAuthStateChangeNotification(false);
    this.stopRefreshTokenTimer();
  }

  /**
   * Initiate forgoten password mechanism and sends password reset link over email.
   * @param body Forgot password data containing user email and client url for generating password reset link.
   * @returns 
   */
  public forgotPassword(body: ForgotPasswordModel): Promise<ErrorResponse> {
    return lastValueFrom(this._http.post<ErrorResponse>(`${environment.apiUrl}/Accounts/ForgotPassword`, body));
  }

  /**
   * Reset password.
   * @param body Data who needs for reset password.
   * @returns 
   */
  public resetPassword(body: ResetPasswordModel): Promise<ErrorResponse> {
    return lastValueFrom(this._http.post<ErrorResponse>(`${environment.apiUrl}/Accounts/ResetPassword`, body));
  }

  /**
   * Confirm user email.
   * @param token Email confirm token.
   * @param email User email who needs to confirm.
   * @returns Response containing flag indicating user email was successfully confirm or some backend errors.
   */
  public confirmEmail(token: string, email: string): Promise<ErrorResponse> {
    let params = new HttpParams({ encoder: new CustomEncoder() });
    params = params.append('token', token);
    params = params.append('email', email);

    return lastValueFrom(this._http.get<ErrorResponse>(`${environment.apiUrl}/Accounts/EmailConfirmation`, { params: params }));
  }

  /**
   * Resend confirmation email if no one arrived.
   * @param data Email confirm link request containing user emial and client url needs for link generation.
   * @returns Response containing flag indicating cofimation email successfully sends.
   */
  public resendConfirmEmail(data: EmialConfirmLinkRequestModel): Promise<ErrorResponse> {
    return lastValueFrom(this._http.post<ErrorResponse>(`${environment.apiUrl}/Accounts/ResendEmailConfirmLink`, data));
  }

  /**
   * Two factor login.
   * @param body Data who needs for two factor authentication.
   * @returns 
   */
  public twoStepLogin(body: TwoFactorModel): Promise<UserAuthenticationResponseModel> {
    return lastValueFrom(this._http.post<UserAuthenticationResponseModel>(`${environment.apiUrl}/Accounts/TwoStepVerification`, body));
  }

  /**
   * Get role from currently logged in user.
   * @returns User roles or nothing.
   */
  public getRolesfromUser(): any {
    const token = localStorage.getItem('token');
    if (token != null) {
      const decodedToken = this._jwtHelper.decodeToken(token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return role;
    }
    return;
  }

  /**
   * Check if user is authenticated.
   * @returns True if user login is correct otherwise false.
   */
  public isUserAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token != 'undefined' && token != null) {
      if (token && !this._jwtHelper.isTokenExpired(token)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if currently logged in user is adminitrator.
   * @returns True if user has the role "Administrator" otherwise false.
   */
  public isUserAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token != null) {
      const decodedToken = this._jwtHelper.decodeToken(token);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles.some((role: string) => role === 'Administrator');
    }
    return false;
  }

  /**
   * Get user name from token.
   * @returns Username or empty string.
   */
  public getUsernameFromToken(): string {
    const token = localStorage.getItem('token');
    if (token != null) {
      const decodedToken = this._jwtHelper.decodeToken(token);
      const username = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      return username;
    }
    return "";
  }

  // /**
  //  * Refresh access token.
  //  * @returns Token response.
  //  */
  // public refreshToken() {
  //     let request = {} as RefreshTokenRequestModel;
  //     let refreshToken = localStorage.getItem('refreshToken');
  //     if (refreshToken != 'undefined' && refreshToken != null) {
  //         request.refreshToken = refreshToken;
  //         return this._http.post<TokenResponseModel>(`${environment.apiUrl}/User/RefreshToken`, request, { withCredentials: true })
  //             .pipe(
  //                 map(response => {
  //                     localStorage.setItem("token", response.token);
  //                     localStorage.setItem("refreshToken", response.refreshToken);
  //                     this.sendAuthStateChangeNotification(response.isSuccess);
  //                     this.startRefreshTokenTimer();
  //                     return response;
  //                 })
  //             );
  //     }
  //     console.log("Error no refresh token found.");
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('refreshToken');
  //     this._router.navigate(['/user/login']);
  //     return of({});
  // }

  /**
 * Refresh access token.
 * @returns Token response.
 */
  public refreshToken(): Promise<TokenResponseModel> {
    let request = {} as RefreshTokenRequestModel;
    let refreshToken = localStorage.getItem('refreshToken');
    return new Promise<TokenResponseModel>((resolve, reject) => {
      if (refreshToken != 'undefined' && refreshToken != null) {
        request.refreshToken = refreshToken;
        lastValueFrom(this._http.post<TokenResponseModel>(`${environment.apiUrl}/User/RefreshToken`, request, { withCredentials: true })).then(response => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("refreshToken", response.refreshToken);
          this.sendAuthStateChangeNotification(response.isSuccess);
          this.startRefreshTokenTimer();
          resolve(response);
        });
      }
      console.log("Error no refresh token found.");
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      this._router.navigate(['/user/login']);
      resolve({} as TokenResponseModel);
    });
  }

  /**
   * Starting timer, when access token needs refresh.
   */
  public startRefreshTokenTimer() {
    const token = localStorage.getItem('token');
    if (token != null) {
      const decodedToken = this._jwtHelper.decodeToken(token);
      const expires = new Date(decodedToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshtokenTimeout = setTimeout(() => this.refreshToken().then(), timeout);
    }
  }

  /**
   * Stop refresh token timer.
   */
  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshtokenTimeout);
  }
}

