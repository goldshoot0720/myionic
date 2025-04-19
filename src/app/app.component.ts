import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {MainComponent} from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  standalone: true,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
