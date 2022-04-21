import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ResetPasswordModel } from 'src/app/_models/user/authentication/resetPassword.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';

/**
 * Reset password component.
 */
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  model = {} as ResetPasswordModel;

  /**
   * Reset password component.
   * @param _authService Service for providing user authentication.
   * @param _route Provides access to information about a route associated with a component that is loaded in an outlet.
   * @param _router A service that provides navigation among views and URL manipulation capabilities.
   * @param _snackBar Service to dispatch Material Design snack bar messages.
   * @param translate Service for providing tranlations.
   */
  constructor(private _authService: AuthenticationService, private _route: ActivatedRoute, private _router: Router, private _snackBar: MatSnackBar, public translate: TranslateService) { }

    /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit(): void {
    this._route.params.subscribe(param => {
      this.model.token =  param['token'];
      this.model.email = param['email'];
    });
  }

    /**
   * Submit form data.
   * @param formData Request data to forgotten password.
   */
  onSubmit(formData: ResetPasswordModel) {
    this._authService.resetPassword(formData).then(response => {
      if (response.isSuccess) {
        this._authService.logout();
        this._router.navigate(['/user/login']);
      }
    });
  }

}
