import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmailTemplateType } from 'src/app/_enums/emailTemplateType';
import { UserAuthenticationRequestModel } from 'src/app/_models/user/authentication/userAuthenticationRequest.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { environment } from 'src/environments/environment';

/**
 * Login component.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: UserAuthenticationRequestModel;
  private _returnUrl: string;
  
  /**
 * Login component.
 * @param _authService Service for providing user authentication.
 * @param _router A service that provides navigation among views and URL manipulation capabilities.
 * @param _route Provides access to information about a route associated with a component that is loaded in an outlet.
 * @param _snackBar Service to dispatch Material Design snack bar messages.
 * @param translate Service for providing tranlations.
 */
  constructor(private _authService: AuthenticationService, private _router: Router, private _route: ActivatedRoute, private _snackBar: MatSnackBar, public translate: TranslateService) { }

  ngOnInit(): void { 
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || 'home';
  }

  /**
   * Submit form data.
   * @param formData User authentication request.
   */
  onSubmit(formData: UserAuthenticationRequestModel) {
    formData.clientURI = `${environment.clientUrl}/authentication/forgotpassword`;
    if (formData.stayLoggedIn == null) {
      formData.stayLoggedIn = false;
    }
    this._authService.loginUser(formData).then(response => {
      if (response.is2StepVerificationRequired) {
        this._router.navigate(['/authentication/twostepverification'], { queryParams: { returnUrl: this._returnUrl, provider: response.provider, email: formData.email } });
      } else {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refreshToken", response.refreshToken);
        this._authService.sendAuthStateChangeNotification(response.isAuthSuccessful);
        this._authService.startRefreshTokenTimer();
        this._router.navigate([this._returnUrl]);
      }
    })
   }

}
