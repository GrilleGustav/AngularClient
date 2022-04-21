import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserRegistrationRequestModel } from 'src/app/_models/user/authentication/userRegistrationRequest.model';
import { Language } from 'src/app/_enums/language';
import { environment } from 'src/environments/environment';
import { EmialConfirmLinkRequestModel } from 'src/app/_models/user/authentication/emailConfirmLinkRequest.model';

/**
 * Register user component.
 */
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
model = {} as UserRegistrationRequestModel;
language = Language;
public supportedLanguage = environment.supportedLanguage;

  /**
   * Register user component.
   * @param _router Provides access to information about a route associated with a component that is loaded in an outlet.
   * @param _authServcice Service for providing user authentication.
   * @param _snackBar Service to dispatch Material Design snack bar messages.
   * @param dialog Service to open Material Design modal dialogs.
   * @param translate Service for providing tranlations.
   */
  constructor(private _router: Router, private _authServcice: AuthenticationService, private _snackBar: MatSnackBar, private dialog: MatDialog, public translate: TranslateService) { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit(): void {
    this.model.clientURI = `${environment.clientUrl}/user/emailconfirmation`;
  }

    /**
   * Submit form data.
   * @param formData User registration request data.
   */
     onSubmit(formData: UserRegistrationRequestModel)
     {
       this._authServcice.registerUser(formData).then(result => {
        this.openRegisterDialog(formData.email, formData.clientURI);
       });
     }

       /**
   * Open register dialog.
   * @param email User email
   * @param clientURI Client url to confirm email view.
   */
  openRegisterDialog(email: string, clientURI: string): void {
    let emialConfirmLinkRequest = {} as EmialConfirmLinkRequestModel;
    emialConfirmLinkRequest.email = email;
    emialConfirmLinkRequest.clientURI = clientURI;
    // const dialogRef = this.dialog.open(RegisterDialogComponent, { width: '500px', data: emialConfirmLinkRequest });
    // dialogRef.afterClosed().subscribe(() => {
    //   this._router.navigate(['user/login']);
    // });
  }

    /**
 * Get language icon code.
 * @param code Icon code.
 * @returns Icon code.
 */
     public findIconCode(code: Language): string {
      console.log(this.supportedLanguage.find(i => i.code == code)?.iconCode);
      return this.supportedLanguage.find(i => i.code == code)?.iconCode || "de";
    }
  
    /**
   * Get language name.
   * @param code Language code.
   * @returns Language name.
   */
    public findName(code: Language): string {
      this.supportedLanguage.find(i => i.code === code)?.name;
      return this.supportedLanguage.find(i => i.code == code)?.name || "Default";
    }

}
