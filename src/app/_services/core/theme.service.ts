import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private _theme = new Subject<string>();
  theme = this._theme.asObservable();

  setTheme(theme: string): void {
    localStorage.setItem("theme", theme);
    this._theme.next(theme);
  }
}
