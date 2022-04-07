import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, } from 'rxjs';
import { EmailServerAddRequestModel } from 'src/app/_models/settings/email/server/request/emailServerAddRequest.model';
import { EmailServerExistResponseModel } from 'src/app/_models/settings/email/server/response/emailServerExistResponse.model';
import { EmailServerSettingResponseModel } from 'src/app/_models/settings/email/server/response/emailServerSettingResponse.model';
import { EmailServerSettingsResponseModel } from 'src/app/_models/settings/email/server/response/emailServerSettingsResponse.model';
import { ErrorResponse } from 'src/app/_models/user/errorResponse.model';
import { environment } from 'src/environments/environment';

/**
 * Service for providing email server.
 */
 @Injectable({ providedIn: 'root' })
 export class EmailSettingsService {
    
     /**
      * Service for providing email server and sender.
      * @param http Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
      */
     constructor(private http: HttpClient) {}
 
     /**
      * Get all email server.
      * @returns Email server settings response containing array of email server or some backend errors. 
      */
     getAll(): Promise<EmailServerSettingsResponseModel>  {
         return lastValueFrom(this.http.get<EmailServerSettingsResponseModel>(`${environment.apiUrl}/EmailServerSettings/GetAll`));
     }
 
     /**
      * Add emial server.
      * @param data Email server add request containing data for new email server.
      * @returns Response containing flag indicating email server was added or some backend errors.
      */
     add(data: EmailServerAddRequestModel): Promise<ErrorResponse> {
         return lastValueFrom(this.http.post<ErrorResponse>(`${environment.apiUrl}/EmailServerSettings/Add`, data));
     }
 
     /**
      * Check email server already esist.
      * @param server Email server exist request containing ip, port and id.
      * @returns Email server response containing flag indicating server already exist.
      */
     serverExist(server: EmailServerAddRequestModel): Promise<EmailServerExistResponseModel> {
         return lastValueFrom(this.http.post<EmailServerExistResponseModel>(`${environment.apiUrl}/EmailServerSettings/Exist`, server));
     }
 
     /**
      * Get one email server.
      * @param id Email server id.
      * @returns Email server response containing one email server or some backend errors.
      */
     getOne(id: number): Promise<EmailServerSettingResponseModel> {
         return lastValueFrom(this.http.get<EmailServerSettingResponseModel>(`${environment.apiUrl}/EmailServerSettings/GetOne/${id}`));
     }
 
     /**
      * Email server edit request
      * @param data Email server edit request.
      * @returns Response containing flag indicating update successfull or some backend errors.
      */
     update(data: EmailServerAddRequestModel): Promise<EmailServerSettingResponseModel> {
         return lastValueFrom(this.http.post<EmailServerSettingResponseModel>(`${environment.apiUrl}/EmailServerSettings/Update`, data));
     }
 
     /**
      * 
      * @param id Email server id.
      * @returns Response containing flag indicating email server deletet.
      */
     delete(id: number): Promise<ErrorResponse> {
         return lastValueFrom(this.http.delete<ErrorResponse>(`${environment.apiUrl}/EmailServerSettings/Delete/${id}`));
     }
 }