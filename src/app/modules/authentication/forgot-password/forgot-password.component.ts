import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { ForgotPasswordModel } from 'src/app/_models/user/authentication/forgotPassword.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { environment } from 'src/environments/environment';

/**
 * Forgot password component.
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

/**
 * Forgot password component.
 * @param _authServcice Service for providing user authentication.
 * @param _snackBar Service to dispatch Material Design snack bar messages.
 * @param translate Service for providing tranlations.
 */
  constructor(private _authServcice: AuthenticationService, private _snackBar: MatSnackBar, public translate: TranslateService) { }
  model = {} as ForgotPasswordModel;

    /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit(): void {
    this.model.clientURI = `${environment.clientUrl}/user/resetPassword`;
  }

    /**
   * Submit form data.
   * @param formData Request data to forgotten password.
   */
     onSubmit(formData: ForgotPasswordModel) {
      this._authServcice.forgotPassword(formData).then();
    }

}
