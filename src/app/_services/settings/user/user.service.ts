import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ClaimSettingsResponseModel } from 'src/app/_models/settings/claim/response/claimSettingsResponse.model';
import { RolesSettingsResponseModel } from 'src/app/_models/settings/role/response/roleSettingsResponse.model';
import { GenerateUrlRequestModel } from 'src/app/_models/settings/user/request/GenerateUrlRequest.model';
import { UserClaimsUpdateRequestModel } from 'src/app/_models/settings/user/request/userClaimsUpdateRequest.model';
import { UserRoleUpdateRequestModel } from 'src/app/_models/settings/user/request/userRoleUpdateRequest.model';
import { UserUpdateRequestModel } from 'src/app/_models/settings/user/request/userUpdateRequest.model';
import { GeneratedUrlResponseModel } from 'src/app/_models/settings/user/response/GeneratedUrlResponse.model';
import { UserSettingResponseModel } from 'src/app/_models/settings/user/response/userSettingResponse.model';
import { UserSettingsResponseModel } from 'src/app/_models/settings/user/response/userSettingsResponse.model';
import { ErrorResponse } from 'src/app/_models/user/errorResponse.model';
import { EmailExistResponseModel } from 'src/app/_models/user/validators/emialExistResponse.model';
import { UsernameExistResponseModel } from 'src/app/_models/user/validators/usernameExistResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing application user data.
 */
 @Injectable({  providedIn: 'root'})
 export class UserService {
     /**
      * Service for providing application user data.
      * @param http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
      */
     constructor(private http: HttpClient) {}
 
     /**
      * Check if username already exist.
      * @param username User name.
      * @returns User name exist response containing flag indicating user already exist.
      */
     usernameExist(username: string): Promise<UsernameExistResponseModel> {
         return lastValueFrom(this.http.post<UsernameExistResponseModel>(`${environment.apiUrl}/User/UserNameExist`, { username }));
     }
 
     /**
      * Check if user with email already exist.
      * @param email 
      * @param id 
      * @returns 
      */
     emailExist(email: string, id: string): Promise<EmailExistResponseModel> {
         return lastValueFrom(this.http.post<EmailExistResponseModel>(`${environment.apiUrl}/Accounts/UserAccountExist`, { email, id }));
     }
 
     /**
      * Get application users.
      * @returns Users response containing array of users or some backend errors.
      */
     getAll(): Promise<UserSettingsResponseModel> {
         return lastValueFrom(this.http.get<UserSettingsResponseModel>(`${environment.apiUrl}/User/GetAll`));
     }
 
     /**
      * Get application user.
      * @param id User id.
      * @returns User response containing one user or some backend errors.
      */
     getOne(id: string): Promise<UserSettingResponseModel> {
         return lastValueFrom(this.http.get<UserSettingResponseModel>(`${environment.apiUrl}/User/GetOne/${id}`));
     }
 
     /**
      * Update application user.
      * @param user Apllication user.
      * @returns User response containing user or some backend errors.
      */
     update(user: UserUpdateRequestModel): Promise<UserUpdateRequestModel> {
         return lastValueFrom(this.http.post<UserUpdateRequestModel>(`${environment.apiUrl}/User/Update`, user));
     }
 
     /**
      * Send email confirm token.
      * @param tokenRequest  Token url request containing user id and client url needed for generating link to view.
      * @returns Generated url token request containing url or some backend errors.
      */
     sendEmailConfirm(tokenRequest: GenerateUrlRequestModel): Promise<GeneratedUrlResponseModel> {
         return lastValueFrom(this.http.post<GeneratedUrlResponseModel>(`${environment.apiUrl}/User/EmailChangeToken`, tokenRequest));
     }
 
     /**
      * Get user roles.
      * @param userId User id.
      * @returns Roles settings response containing array of user roles or some backend errors.
      */
     getUserRoles(userId: string): Promise<RolesSettingsResponseModel> {
         return lastValueFrom(this.http.get<RolesSettingsResponseModel>(`${environment.apiUrl}/User/GetUserRoles/${userId}`));
     }
 
     /**
      * Udate user roles.
      * @param request Update user role request containing user id, array of roles or some backend error.
      * @returns Response containing flag indicating user roles successfully updated or some backend errors.
      */
     updateUserRoles(request: UserRoleUpdateRequestModel): Promise<ErrorResponse> {
         return lastValueFrom(this.http.post<ErrorResponse>(`${environment.apiUrl}/User/UpdateUserRoles`, request));
     }
 
     /**
      * Update user claims.
      * @param request User claims uodate request containing array of claims and user id.
      * @returns Response containing flag indicating user claims successfully updated or some backend errors.
      */
     updateUserClaims(request: UserClaimsUpdateRequestModel): Promise<ErrorResponse> {
         return lastValueFrom(this.http.post<ErrorResponse>(`${environment.apiUrl}/User/UpdateUserClaims`, request));
     }
 
     /**
      * Get user claims.
      * @param id User id.
      * @returns Claims settings response containing array of claims or some backend errors.
      */
     getUserClaims(id: string): Promise<ClaimSettingsResponseModel> {
         return lastValueFrom(this.http.get<ClaimSettingsResponseModel>(`${environment.apiUrl}/User/GetUserClaims/${id}`));
     }
 }
