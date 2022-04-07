import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ClaimsRequestModel } from 'src/app/_models/settings/claim/request/claimsRequest.model';
import { ApplicationClaimSettingsResponseModel } from 'src/app/_models/settings/claim/response/applicationClaimSettingsResponse.model';
import { ClaimSettingsResponseModel } from 'src/app/_models/settings/claim/response/claimSettingsResponse.model';
import { RoleAddRequestModel } from 'src/app/_models/settings/role/request/roleAddRequest.model';
import { RoleSettingResponseModel } from 'src/app/_models/settings/role/response/roleSettingResponse.model';
import { RolesSettingsResponseModel } from 'src/app/_models/settings/role/response/roleSettingsResponse.model';
import { ErrorResponse } from 'src/app/_models/user/errorResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing application roles data.
 */
 @Injectable({
  providedIn: 'root'
})
export class RoleService {

  /**
   * Service for providing application roles data.
   * @param http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Get application roles.
   * @returns Roles settings response containing array of application roles or some backend errors..
   */
  getAll(): Promise<RolesSettingsResponseModel> {
    return lastValueFrom(this.http.get<RolesSettingsResponseModel>(`${environment.apiUrl}/Role/GetAll`));
  }

  /**
   * Get application role.
   * @param id Role id.
   * @returns Role settings response containing application role or some backend errors.
   */
  getOne(id: string): Promise<RoleSettingResponseModel> {
    return lastValueFrom(this.http.get<RoleSettingResponseModel>(`${environment.apiUrl}/Role/GetOne/${id}`));
  }

  /**
   * Get application claims associated with role.
   * @param id Role id.
   * @returns Claims settings response containing array of application claims associated with role or some backend errors.
   */
  getClaimsFromRole(id: string): Promise<ClaimSettingsResponseModel> {
    return lastValueFrom(this.http.get<ClaimSettingsResponseModel>(`${environment.apiUrl}/Role/GetClaimsFromRole/${id}`));
  }

  /**
   * Add and get new role.
   * @param role Role add request containing data for new role.
   * @returns Role settings response containing new added role or some backend errors.
   */
  addRole(role: RoleAddRequestModel): Promise<RoleSettingResponseModel> {
    return lastValueFrom(this.http.post<RoleSettingResponseModel>(`${environment.apiUrl}/Role/Add`, role));
  }

  /**
   * Delete role.
   * @param id Role id.
   * @returns Response containing flag indicating role deleted or some backend errors.
   */
  deleteRole(id: string): Promise<ErrorResponse> {
    return lastValueFrom(this.http.delete<ErrorResponse>(`${environment.apiUrl}/Role/Delete/${id}`));
  }

  /**
   * Get application claims.
   * @returns Application claims response containing array of application claims or some backend errors.
   */
  getApplicationClaims(): Promise<ApplicationClaimSettingsResponseModel> {
    return lastValueFrom(this.http.get<ApplicationClaimSettingsResponseModel>(`${environment.apiUrl}/ApplicationClaims/GetClaims`));
  }

  /**
   * Update role claims.
   * @param request Claim data.
   * @returns Respnse containing flag indicating role claims updated or some backend errors.
   */
  updateClaims(request: ClaimsRequestModel): Promise<ErrorResponse> {
    return lastValueFrom(this.http.post<ErrorResponse>(`${environment.apiUrl}/Role/UpdateRoleClaims`, request));
  }
}