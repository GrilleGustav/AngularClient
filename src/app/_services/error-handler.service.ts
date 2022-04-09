import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {
  constructor(private _router: Router, private _snackBar: MatSnackBar, private _authService: AuthenticationService, private translate: TranslateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req)
          .pipe(
              tap(evt => {
                  const isApiUrl = req.url.startsWith(environment.apiUrl);
                  if (evt instanceof HttpResponse) {
                      if ((evt.status == 200 || evt.status == 201) && isApiUrl && !evt.body.tokenNeedsRefresh) {
                          if (evt.body.isSuccess || evt.body.isAuthSuccessful) {
                              this._snackBar.open(this.translate.instant('MESSAGE.18'), 'Ok', { duration: 3000, panelClass: ["success-snackbar"], verticalPosition: 'top', horizontalPosition: 'end' });
                          }
                          else {
                              evt.body.errors.forEach((error: { errorCode: string | number; }) => {
                                  if (error.errorCode <= 2000) {
                                      this._snackBar.open(this.translate.instant('MESSAGE.ERROR.' + error.errorCode), 'Error', { duration: 3000, panelClass: ["error-snackbar"], verticalPosition: 'top', horizontalPosition: 'end' });
                                  }
                                  else if (error.errorCode >= 2001) {
                                      this._snackBar.open(this.translate.instant('MESSAGE.WARNING.' + error.errorCode), 'Warning', { duration: 3000, panelClass: ["warning-snackbar"], verticalPosition: 'top', horizontalPosition: 'end' });
                                  }
                                  console.log(error);
                              });
                          }
                      }
                      else if (isApiUrl) {
                          //this._authService.refreshToken().subscribe();
                          window.location.reload();
                          //this._snackBar.open(this.translate.instant('MESSAGE.19'), 'Ok', { duration: 3000, panelClass: ["warning-snackbar"] });
                      }
                  }
                  return req;
              }),
              catchError((error: HttpErrorResponse) => {
                  let errorMessage = this.handleError(error);
                  return throwError(errorMessage);
              })
          )
  }

  private handleError = (error: HttpErrorResponse): string => {
      if (error.status === 404 || error.status === 0) {
          return this.handleNotFound(error);
      }
      else if (error.status === 400) {
          return this.handleBadRequest(error);
      }
      else if (error.status === 401) {
          return this.handleUnauthorized(error);
      }
      else if (error.status === 403) {
          return this.handleForbidden(error);
      }
      return "";
  }

  private handleForbidden = (error: HttpErrorResponse) => {
      this._router.navigate(["/forbidden"], { queryParams: { returnUrl: this._router.url } });
      return "Forbidden";
  }

  private handleUnauthorized = (response: HttpErrorResponse) => {
      let snackbarContent = "";
      response.error.errors.forEach((error: { errorCode: string; }) => {
          snackbarContent = snackbarContent + `${error.errorCode} =>\n ${this.translate.instant('MESSAGE.ERROR.' + error.errorCode)} \n`;
          this._snackBar.open(snackbarContent, 'Error', { duration: 3000, panelClass: ["error-snackbar"], verticalPosition: 'top', horizontalPosition: 'end' });
      });

      console.log(snackbarContent);
      if (this._router.url.startsWith('/user/login')) {
          return snackbarContent;
      }
      else {
          this._router.navigate(['/user/login'], { queryParams: { returnUrl: this._router.url } });
          return snackbarContent;
      }
  }

  private handleNotFound = (error: HttpErrorResponse): string => {
      this._router.navigate(['/404']);
      return error.message;
  }

  private handleBadRequest = (response: HttpErrorResponse): string => {
      let snackbarContent = "";
      response.error.errors.forEach((error: { errorCode: string; }) => {
          snackbarContent = snackbarContent + `${error.errorCode} => ${this.translate.instant('MESSAGE.ERROR.' + error.errorCode)} \n`;
          this._snackBar.open(snackbarContent, 'Error', { duration: 3000, panelClass: ["error-snackbar"], verticalPosition: 'top', horizontalPosition: 'end' });
      });

      console.log(snackbarContent);
      return snackbarContent;
  }
}
