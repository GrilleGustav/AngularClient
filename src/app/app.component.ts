import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './_services/core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularClient';
  theme!: string;//Observable<string>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    //this.theme = this.themeService.theme;
    this.theme = localStorage.getItem("theme") || "dark-theme";
    this.themeService.theme.subscribe(th => {
      this.theme = th; 
    });

  }
}
