import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EmailTemplateViewModel } from 'src/app/_models/settings/email/template/emailTemplateView.model';
import { EmailTemplateSettingResponseModel } from 'src/app/_models/settings/email/template/response/emailTemplateSettingResponse.model';
import { EmailTemplateSettingsResponseModel } from 'src/app/_models/settings/email/template/response/emailTemplateSettingsResponse.model';
import { ErrorResponse } from 'src/app/_models/user/errorResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing apllication templates.
 */
@Injectable({ providedIn: 'root' })
export class TemplateSettingsService {

  /**
   * Service for providing application templates.
   * @param http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Get all templates.
   * @returns Email template response containing array of templates or some backend errors.
   */
  getAll(): Promise<EmailTemplateSettingsResponseModel> {
    return lastValueFrom(this.http.get<EmailTemplateSettingsResponseModel>(`${environment.apiUrl}/EmailTemplate/GetAll`));
  }

  /**
   * Get one template.
   * @param id Template id.
   * @returns Email template response containing one template or some backend errors.
   */
  getOne(id: number): Promise<EmailTemplateSettingResponseModel> {
    return lastValueFrom(this.http.get<EmailTemplateSettingResponseModel>(`${environment.apiUrl}/EmailTemplate/GetOne/${id}`));
  }

  /**
   * Add template.
   * @param data Email template.
   * @returns Response containing flag indicating template was added or soem backend errors.
   */
  add(data: EmailTemplateViewModel): Promise<ErrorResponse> {
    return lastValueFrom(this.http.post<ErrorResponse>(`${environment.apiUrl}/EmailTemplate/Add`, data));
  }

  /**
   * Update template.
   * @param data Emial template.
   * @returns Response containing flag indicating template was updated or some backend errors.
   */
  update(data: EmailTemplateViewModel): Promise<EmailTemplateSettingResponseModel> {
    return lastValueFrom(this.http.post<EmailTemplateSettingResponseModel>(`${environment.apiUrl}/EmailTemplate/Update`, data));
  }

  /**
   * Delete template.
   * @param id Template id.
   * @returns Email template response containing the deletet template or some backend errors.
   */
  remove(id: number): Promise<ErrorResponse> {
    return lastValueFrom(this.http.get<ErrorResponse>(`${environment.apiUrl}/EmailTemplate/Delete/${id}`));
  }
}

