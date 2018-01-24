import { Component } from '@angular/core';

import {settings } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    appName = settings.appName;
    menu = settings.menu;

}
