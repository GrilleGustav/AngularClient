import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/_services/core/theme.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  isDarkTheme!: Observable<string>;

  constructor(private themeService: ThemeService) {
   }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.theme;
  }

  toggleDarkTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

}
