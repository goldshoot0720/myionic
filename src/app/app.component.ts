import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {My0000Component} from './my0000/my0000.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp,My0000Component],
})
export class AppComponent {
  constructor() {}
}
