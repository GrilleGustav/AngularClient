import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApplicationClaimSettingsResponseModel } from 'src/app/_models/settings/claim/response/applicationClaimSettingsResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing application claims data.
 */
@Injectable({ providedIn: 'root' })
export class ClaimService {

  /**
   * Service for providing application claims data.
   * @param http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Get application claims.
   * @returns Application claims response containing array of application claims or some backend errors.
   */
  getApplicationClaims(): Promise<ApplicationClaimSettingsResponseModel> {
    return lastValueFrom(this.http.get<ApplicationClaimSettingsResponseModel>(`${environment.apiUrl}/ApplicationClaims/GetClaims`));
  }
}
