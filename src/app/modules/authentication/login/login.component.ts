import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
