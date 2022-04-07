
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EmailMessageResponseModel } from 'src/app/_models/settings/email/messages/response/emailMessagesResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing email messages.
 */
@Injectable({
  providedIn: 'root'
})
export class EmailMessageService {

  /**
   * Service for providing email messages.
   * @param http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Get all email messages.
   * @returns Email messages response containing array of email messages or some backend errors..
   */
  getAll(): Promise<EmailMessageResponseModel> {
    return lastValueFrom(this.http.get<EmailMessageResponseModel>(`${environment.apiUrl}/EmailMessage/GetAll`));
  }
}