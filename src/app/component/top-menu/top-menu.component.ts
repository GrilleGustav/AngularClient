import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ThemeService } from 'src/app/_services/core/theme.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  isDarkTheme!: Observable<string>;
  public isUserAuthenticated!: boolean;
  public isExternalAuth!: boolean;
  public username!: string;
  public isAdmin: boolean = false;
  public selectedLanguage!: string | null;
  public selectedLanguageIcon!: string;
  public supportedLanguage = [
    { code: "de", name: "Germany", iconCode: "de" },
    { code: "en", name: "English", iconCode: "gb" }
  ];

  constructor(private themeService: ThemeService, private _authService: AuthenticationService, private _router: Router, public translate: TranslateService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.theme;
    this.selectedLanguage = localStorage.getItem("language");
    if (this.selectedLanguage != null && this.selectedLanguage != undefined) {
      this.selectedLanguageIcon = this.selectedLanguage.split(',')[1];
      this.translate.use(this.selectedLanguage.split(',')[0]);
    }
    else {
      this.selectedLanguageIcon = "gb";
      this.selectedLanguage = "en";
    }

    this._authService.authChanged.subscribe(result => {
      this.isUserAuthenticated = result;
      this.username = this._authService.getUsernameFromToken();
      this.isUserAuthenticated = this._authService.isUserAdmin();
    });
  }

  /**
 * Set language in local storage and change application language.
 * @param languageCode Language code. e.g. DE, EN
 * @param iconCode Icon code.
 */
  onChangeLanguage(languageCode: string, iconCode: string) {
    localStorage.setItem("language", languageCode + "," + iconCode);
    this.translate.use(languageCode);
    this.selectedLanguage = languageCode;
    this.selectedLanguageIcon = iconCode;
  }

  toggleTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  /**
   * Logout application user.
   */
  public logout() {
    this._authService.logout();
    this.username = "";
    this._router.navigate(["/"]);
  }

}