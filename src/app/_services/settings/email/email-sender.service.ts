import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EmailSenderAddRequestModel } from 'src/app/_models/settings/email/sender/request/emailSenderAddRequest.model';
import { EmailSenderSettingResponseModel } from 'src/app/_models/settings/email/sender/response/emailSenderSettingResponse.model';
import { EmailSenderSettingsResponseModel } from 'src/app/_models/settings/email/sender/response/emailSenderSettingsResponse.model';
import { ErrorResponse } from 'src/app/_models/user/errorResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing email sender.
 */
@Injectable({ providedIn: 'root' })
export class EmailSenderService {

  /**
   * Service for providing email sender.
   * @param http erforms HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
  * Get all sender.
  * @returns Email senders response containing array of email senders or some backend errors.
  */
  getAllSender(): Promise<EmailSenderSettingsResponseModel> {
    return lastValueFrom(this.http.get<EmailSenderSettingsResponseModel>(`${environment.apiUrl}/EmailSenderSettings/GetAll`));
  }

  /**
  * Add email sender.
  * @param data Email server add request containing email server id and sender address.
  * @returns Email sender Settings response containing
  */
  addSender(data: EmailSenderAddRequestModel): Promise<EmailSenderSettingResponseModel> {
    return lastValueFrom(this.http.post<EmailSenderSettingResponseModel>(`${environment.apiUrl}/EmailSenderSettings/Add`, data));
  }

/**
 * Delete sender.
 * @param id Sender id.
 * @returns Response containing flag indicating sender deletet.
 */
  deleteSender(id: number): Promise<ErrorResponse> {
    return lastValueFrom(this.http.delete<ErrorResponse>(`${environment.apiUrl}/EmailSenderSettings/Delete/${id}`));
  }
}
